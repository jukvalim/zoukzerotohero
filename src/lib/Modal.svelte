<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	interface Props {
		isOpen: boolean;
		title?: string;
		size?: 'sm' | 'md' | 'lg' | 'xl';
		closeOnBackdrop?: boolean;
		children: any;
	}

	let {
		isOpen,
		title,
		size = 'lg',
		closeOnBackdrop = true,
		children
	}: Props = $props();

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}

	function handleBackdropClick(e: MouseEvent) {
		if (closeOnBackdrop && e.target === e.currentTarget) {
			closeModal();
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			closeModal();
		}
	}

	// Size classes
	const sizeClasses = {
		sm: 'max-w-md',
		md: 'max-w-lg',
		lg: 'max-w-2xl',
		xl: 'max-w-4xl'
	};
</script>

{#if isOpen}
	<!-- Modal backdrop -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-labelledby={title ? 'modal-title' : undefined}
		tabindex="-1"
	>
		<!-- Modal content -->
		<div
			class="relative w-full {sizeClasses[size]} max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			role="document"
			tabindex="0"
		>
			<!-- Header -->
			{#if title}
				<div class="flex items-center justify-between border-b border-gray-200 p-6">
					<h2 id="modal-title" class="text-2xl font-bold text-gray-800">
						{title}
					</h2>
					<button
						onclick={closeModal}
						class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
						aria-label="Close modal"
					>
						<span class="text-xl font-bold">×</span>
					</button>
				</div>
			{:else}
				<!-- Close button without header -->
				<div class="absolute right-4 top-4 z-10">
					<button
						onclick={closeModal}
						class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
						aria-label="Close modal"
					>
						<span class="text-xl font-bold">×</span>
					</button>
				</div>
			{/if}

			<!-- Content -->
			<div class="p-6">
				{@render children()}
			</div>
		</div>
	</div>
{/if}
