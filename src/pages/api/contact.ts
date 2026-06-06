import type { APIRoute } from 'astro'
import { Resend } from 'resend'
import { randomUUID } from 'node:crypto'

export const prerender = false

const CORS_HEADERS = {
	'Access-Control-Allow-Origin': 'https://limegreen-fox-593309.hostingersite.com',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type'
}

export const OPTIONS: APIRoute = () => {
	return new Response(null, { status: 204, headers: CORS_HEADERS })
}

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
	let body: Record<string, string>

	const corsAndJson = { 'Content-Type': 'application/json', ...CORS_HEADERS }

	try {
		body = await request.json()
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body.' }), {
			status: 400,
			headers: corsAndJson
		})
	}

	const { firstName, lastName, email, phone, message } = body

	if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
		return new Response(JSON.stringify({ error: 'Required fields are missing.' }), {
			status: 400,
			headers: corsAndJson
		})
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(email)) {
		return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
			status: 400,
			headers: corsAndJson
		})
	}

	const toEmail = import.meta.env.CONTACT_EMAIL_TO
	if (!toEmail) {
		return new Response(JSON.stringify({ error: 'Server configuration error.' }), {
			status: 500,
			headers: corsAndJson
		})
	}

	const emailOptions: Parameters<typeof resend.emails.send>[0] = {
		from: import.meta.env.EMAIL_FROM || 'OptiCV Contact Form <onboarding@resend.dev>',
		to: [toEmail],
		replyTo: email,
		subject: `New contact message from ${firstName} ${lastName}`,
		html: `
		<h2>New Contact Form Submission</h2>
		<p><strong>Name:</strong> ${firstName} ${lastName}</p>
		<p><strong>Email:</strong> ${email}</p>
		${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
		<p><strong>Message:</strong></p>
		<p style="white-space: pre-wrap;">${message}</p>
	  `,
		// Prevent Gmail threading
		// Gmail threads emails by subject and Message-ID/References
		// Using X-Entity-Ref-ID with a unique value prevents threading
		headers: { 'X-Entity-Ref-ID': randomUUID() }
	}

	const { error } = await resend.emails.send(emailOptions)

	if (error) {
		console.error('Resend error:', error)
		return new Response(JSON.stringify({ error: 'Failed to send message. Please try again.' }), {
			status: 500,
			headers: corsAndJson
		})
	}

	return new Response(JSON.stringify({ success: true }), {
		status: 200,
		headers: corsAndJson
	})
}
