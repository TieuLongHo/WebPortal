<script lang="ts">
	import '../app.postcss';

	import { AppShell, AppBar, initializeStores, Modal } from '@skeletonlabs/skeleton';

	import Sidebar from '../lib/components/Sidebar.svelte';

	initializeStores();
</script>

<Modal />
<AppShell slotSidebarLeft="h-screen z-10 mt-20 fixed" slotHeader="fixed">
	<svelte:fragment slot="header">
		<AppBar class="text-5xl font-bold w-screen shadow-md">
			<svelte:fragment slot="lead"
				><a href="/"
					><span
						class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
						>Rea</span
					><span class="">IoT</span>
				</a></svelte:fragment
			>
			<svelte:fragment slot="trail"></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="mt-32 ml-24">
		<slot />
	</div>

	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"
		><h2>HALLO</h2>
		<div class="h-20"></div></svelte:fragment
	>
	<!-- (footer) -->
</AppShell>
