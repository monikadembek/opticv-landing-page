// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'OptiCV',
		aboutText:
			"AI-powered CV optimization that rewrites your CV for the exact job you're chasing, so it passes ATS filters and lands on a real recruiter's desk.",
		logo: {
			src: '/opticv-logo-icon.svg',
			alt: 'OptiCV logo',
			text: 'OptiCV'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'What is ATS',
					subCategoryLink: '/#how-it-works'
				},
				{
					subCategory: 'Sign in',
					subCategoryLink: 'https://opticv-app-web.onrender.com/login'
				}
			]
		},
		{
			category: 'Company',
			subCategories: [
				{
					subCategory: 'About',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Blog',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'Legal',
			subCategories: [
				{
					subCategory: 'Privacy Policy',
					subCategoryLink: '/terms'
				},
				{
					subCategory: 'Terms of Service',
					subCategoryLink: '/terms'
				},
				{
					subCategory: 'Cookie Policy',
					subCategoryLink: '/terms'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© 2026 OptiCV. Made for job seekers who deserve better odds.'
	}
}
