<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import { navigate } from 'svelte-routing';
	import Lorem from './placeholder/Lorem.svelte';
	function onCompleteHandler(e: Event): void {
		navigate('/exercises');
	}
</script>

<div class="card variant-soft p-16">
	<Stepper on:complete={onCompleteHandler}>
		<Step>
			<svelte:fragment slot="header">Welcome</svelte:fragment>
			<Lorem />
		</Step>
		<Step>
			<svelte:fragment slot="header">IoT-Education Board</svelte:fragment>
			<Lorem />
		</Step>
		<Step>
			<svelte:fragment slot="header">Visual Studio Code</svelte:fragment>
			<Lorem />
		</Step>
		<Step>
			<svelte:fragment slot="header">Platform IO</svelte:fragment>
			<Lorem />
		</Step>
		<Step>
			<svelte:fragment slot="header">How does it work?</svelte:fragment>
			<Lorem />
		</Step>
		<Step>
			<svelte:fragment slot="header">File structure</svelte:fragment>
			<Lorem />
		</Step>
		<Step>
			<svelte:fragment slot="header">Have Fun!</svelte:fragment>
			<Lorem />
		</Step>
	</Stepper>
</div>
