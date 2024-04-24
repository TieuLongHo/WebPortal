<script lang="ts">
	import Lorem from '../placeholder/Lorem.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	export let components: Component[] = [];

	interface Component {
		name: string;
		description: string;
		functions: string;
	}

	console.log(components);
</script>

<h1 class="h2 mt-5 mb-5">Components</h1>
<div class="card p-5 rounded-xl">
	<Accordion>
		{#each components as component}
			<AccordionItem>
				<svelte:fragment slot="summary">
					<span class="text-lg font-bold">{component.name}</span></svelte:fragment
				>
				<svelte:fragment slot="content">{component.description}</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</div>
