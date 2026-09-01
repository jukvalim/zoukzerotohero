import { describe, expect, it } from 'vitest';
import {
	getZoukOSaturdayFacebookUrl,
	isTryOutSaturdayVisible,
	TRY_OUT_FACEBOOK_URL,
	TRY_OUT_SATURDAY_ENDS_AT,
	ZOUK_O_SATURDAY_FACEBOOK_URL
} from './tryOutSaturday';

describe('isTryOutSaturdayVisible', () => {
	it('is visible on Saturday 5 Sep 2026 in Helsinki', () => {
		expect(isTryOutSaturdayVisible(new Date('2026-09-05T23:59:59+03:00'))).toBe(true);
	});

	it('is hidden from Sunday 6 Sep 2026 in Helsinki', () => {
		expect(isTryOutSaturdayVisible(new Date('2026-09-06T00:00:00+03:00'))).toBe(false);
	});

	it('uses the Helsinki midnight cutoff', () => {
		expect(TRY_OUT_SATURDAY_ENDS_AT.toISOString()).toBe('2026-09-05T21:00:00.000Z');
	});
});

describe('getZoukOSaturdayFacebookUrl', () => {
	it('points at this Saturday while the try-out is current', () => {
		expect(getZoukOSaturdayFacebookUrl(new Date('2026-09-05T12:00:00+03:00'))).toBe(
			TRY_OUT_FACEBOOK_URL
		);
	});

	it('falls back to the series event afterwards', () => {
		expect(getZoukOSaturdayFacebookUrl(new Date('2026-09-06T12:00:00+03:00'))).toBe(
			ZOUK_O_SATURDAY_FACEBOOK_URL
		);
	});
});
