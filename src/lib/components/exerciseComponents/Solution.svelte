<script lang="ts">
	import Codeblock from '../placeholder/Codeblock.svelte';
	import Lorem from '../placeholder/Lorem.svelte';
	import {Accordion, AccordionItem, getModalStore, ModalSettings} from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const modal: ModalSettings = {
		type: 'confirm',
		// Data
		title: 'Please Confirm',
		body: 'Are you sure you wish to unlock the Solution?',
		// TRUE if confirm pressed, FALSE if cancel pressed
		response: (r: boolean) => (disabled = r)
	};

	let disabled: boolean = false;
	const handleSolution = () => {
		modalStore.trigger(modal);
	};
	interface Solution {
		explanation: string;
		code: string;
	}
	export let solution: Solution = {
		explanation: '',
		code: ''
	};
</script>

<h2 class="h2 mb-5">Solution</h2>

{#if !disabled}
	<button class="btn variant-filled-warning" on:click={() => modalStore.trigger(modal)}>
		Show Solution
	</button>
{:else}
	<p>{solution.explanation}</p>
	<Codeblock code_solution={`solution.code`} />
{/if}
