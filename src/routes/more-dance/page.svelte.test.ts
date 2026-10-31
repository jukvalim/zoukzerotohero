import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/more-dance/+page.svelte', () => {
	it('should render h1', async () => {
		render(Page);

		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toHaveTextContent('More Dance to Your Zouk Course');
	});

	it('should link to open Holvi registrations', async () => {
		render(Page);

		await expect
			.element(page.getByRole('link', { name: /Register as a follower/ }))
			.toHaveAttribute(
				'href',
				'https://holvi.com/shop/zoukzerotohero/product/1faf4751771bbfe9b45c1791889ad6af/'
			);
		await expect
			.element(page.getByRole('link', { name: /Register as a leader/ }))
			.toHaveAttribute(
				'href',
				'https://holvi.com/shop/zoukzerotohero/product/35eedf1ae1b2004ec05f7befe29763cc/'
			);
		await expect
			.element(page.getByRole('link', { name: /Couple registration/ }))
			.toHaveAttribute(
				'href',
				'https://holvi.com/shop/zoukzerotohero/product/d1050a5965656d24c9d485789d87e0a7/'
			);
	});
});
