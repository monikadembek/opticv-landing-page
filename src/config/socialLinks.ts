// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'facebook',
		link: 'https://www.facebook.com/profile.php?id=61591526651342',
		icon: 'fb-icon'
	},
	{
		name: 'instagram',
		link: 'https://www.instagram.com/opticv_app/',
		icon: 'ig-icon'
	}
	// {
	// 	name: 'twitter',
	// 	link: '/',
	// 	icon: 'twitter-icon'
	// },
	// {
	// 	name: 'discord',
	// 	link: '/',
	// 	icon: 'discord-icon'
	// }
]
