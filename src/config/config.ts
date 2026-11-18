// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'CV Optimization for ATS | Tailor Your CV to Any Job | OptiCV',
	siteDescription:
		'Optimize your CV for ATS and tailor it to any job description in minutes. OptiCV checks keywords, improves formatting, and helps you land more interviews. Free to start.',
	ogImage: '/og.jpg',
	logo: {
		src: '/opticv-logo-icon.svg',
		alt: 'OptiCV logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
