import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/head-movements-2/+page.svelte', () => {
	it('should render h1', async () => {
		render(Page);

		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toHaveTextContent('Head Movements II Course');
	});

	it('should link to open Holvi registrations', async () => {
		render(Page);

		await expect.element(page.getByText('Follower registration sold out')).toBeInTheDocument();
		await expect.element(page.getByText('Register as a follower')).not.toBeInTheDocument();
		await expect
			.element(page.getByRole('link', { name: /Register as a leader/ }))
			.toHaveAttribute(
				'href',
				'https://holvi.com/shop/zoukzerotohero/product/1f3e0f558fb54e557494fdf2d649a6d0/'
			);
		await expect
			.element(page.getByRole('link', { name: /Couple registration/ }))
			.toHaveAttribute(
				'href',
				'https://holvi.com/shop/zoukzerotohero/product/3a1583b98fd7522736fb65a6b67ed859/'
			);
	});
});
