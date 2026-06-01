// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/opticv-logo-icon.svg',
		alt: 'OptiCV logo',
		text: 'OptiCV'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Features', link: '/features' },
		{ name: 'What is ATS', link: '/what-is-ats' },
		{ name: 'Pricing', link: '/pricing' },
		{ name: 'Contact', link: '/contact' },
		{ name: 'Blog', link: '/blog' }
	],
	navActions: [
		// { name: 'Sign in', link: '/', style: 'neutral', size: 'lg' },
		{ name: 'Optimize CV', link: '/', style: 'primary', size: 'lg' }
	]
}
