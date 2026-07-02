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
	siteTitle: 'OptiCV — AI-Powered CV Optimization',
	siteDescription:
		"OptiCV rewrites your CV for the exact job you're chasing, so it passes ATS filters and lands on a real recruiter's desk. Upload your CV, paste the job ad, get results in under 5 minutes.",
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
