import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render h1', async () => {
		render(Page);

		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toBeInTheDocument();
	});

	it('should mark follower registration as sold out', async () => {
		render(Page);

		await expect.element(page.getByText('Follower registration sold out')).toBeInTheDocument();
		await expect.element(page.getByText('Register as a follower')).not.toBeInTheDocument();
		await expect.element(page.getByRole('link', { name: /Register as a leader/ })).toBeInTheDocument();
		await expect.element(page.getByRole('link', { name: /Couple registration/ })).toBeInTheDocument();
	});
});
