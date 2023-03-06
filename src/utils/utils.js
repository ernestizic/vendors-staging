// Vendor base URL
export const base_url_vendors =
	process.env.NODE_ENV === 'development'
		? 'https://staging-vendors.giftly.me/api'
		: 'https://vendors.giftly.me/api';
