/** End of Saturday 5 Sep 2026 in Helsinki (EEST, UTC+3). Hidden from Sunday 6 Sep. */
export const TRY_OUT_SATURDAY_ENDS_AT = new Date('2026-09-06T00:00:00+03:00');

export const TRY_OUT_FACEBOOK_URL =
	'https://www.facebook.com/events/4764200273801776/4764200317135105/';

export const ZOUK_O_SATURDAY_FACEBOOK_URL = 'https://www.facebook.com/events/4764200273801776';

export function isTryOutSaturdayVisible(now: Date = new Date()): boolean {
	return now < TRY_OUT_SATURDAY_ENDS_AT;
}

export function getZoukOSaturdayFacebookUrl(now: Date = new Date()): string {
	return isTryOutSaturdayVisible(now) ? TRY_OUT_FACEBOOK_URL : ZOUK_O_SATURDAY_FACEBOOK_URL;
}
