<script lang="ts">
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<AppRail class="w-24">
	<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Home</span>
	</AppRailAnchor>
	<AppRailAnchor href="/exercises" selected={$page.url.pathname.startsWith('/exercises')}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Exercises</span>
	</AppRailAnchor>
	<AppRailAnchor href="/settings" selected={$page.url.pathname === '/settings'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Settings</span>
	</AppRailAnchor>
</AppRail>
