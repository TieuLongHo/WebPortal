<script lang="ts">
	import ExerciseCard from '$lib/components/ExerciseCard.svelte';
	import { page } from '$app/stores';
	let exercise: string = $page.params.exerciseId;
</script>

<div class="container mx-auto">
	<ExerciseCard {exercise} />
</div>
