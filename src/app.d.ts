// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			disableFinnish?: boolean;
		}
		// interface PageState {}
		// interface Platform {}
	}

	// Plausible analytics global function
	interface Window {
		plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
	}
}

export {};
