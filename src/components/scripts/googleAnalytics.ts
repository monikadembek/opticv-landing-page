// Google Analytics
// ------------
// Description: Loads Google Analytics only after the visitor accepts analytics cookies,
// and stops it and removes its cookies when they reject.
// Page views after client-side navigation are tracked by GA4 enhanced measurement
// (browser history events), so no manual page_view events are sent.

declare global {
	interface Window {
		dataLayer?: unknown[]
		gtag?: (...args: unknown[]) => void
		[disableKey: `ga-disable-${string}`]: boolean | undefined
	}
}

const GA_COOKIE_PATTERN = /^_ga(_|$)/

let isLoaded = false

export function enableGoogleAnalytics(measurementId: string): void {
	window[`ga-disable-${measurementId}`] = false

	if (isLoaded) {
		// Re-enabled after a reject on the same page: send a fresh page view, which also sets the cookies again.
		window.gtag?.('config', measurementId)
		return
	}

	window.dataLayer = window.dataLayer || []
	window.gtag = function gtag() {
		// gtag.js expects the arguments object itself, not an array.
		// eslint-disable-next-line prefer-rest-params
		window.dataLayer?.push(arguments)
	}
	window.gtag('js', new Date())
	window.gtag('config', measurementId)

	const script = document.createElement('script')
	script.async = true
	script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
	document.head.appendChild(script)

	isLoaded = true
}

export function disableGoogleAnalytics(measurementId: string): void {
	window[`ga-disable-${measurementId}`] = true
	deleteGoogleAnalyticsCookies()
}

function deleteGoogleAnalyticsCookies(): void {
	const cookieNames = document.cookie
		.split(';')
		.map((cookie) => cookie.split('=')[0].trim())
		.filter((name) => GA_COOKIE_PATTERN.test(name))

	// GA sets its cookies on the top-level domain (.opticv.net), so expire them on every parent domain too.
	const hostParts = window.location.hostname.split('.')
	const domains = hostParts.map((_, index) => hostParts.slice(index).join('.'))

	for (const name of cookieNames) {
		const expired = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
		document.cookie = expired
		for (const domain of domains) {
			document.cookie = `${expired}; domain=${domain}`
		}
	}
}
