<script lang="ts">
	import data from '../data/combined-tutorials.json';

	let tutorial = data.tutorials;
</script>

{#each tutorial as exercise}
	<a href="/exercises/{exercise.id}">
		<div class="card variant-soft p-8 mb-10">
			<div class="inline-flex space-x-5">
				<h1 class="text-2xl">{exercise.title}</h1>
				{#if exercise.difficulty === 'easy'}
					<div class="variant-ghost-success h-6 w-12 text-center rounded-xl">Easy</div>
				{:else if exercise.difficulty === 'intermediate'}
					<div class="variant-ghost-warning h-6 w-28 text-center rounded-xl">Intermediate</div>
				{:else if exercise.difficulty === 'hard'}
					<div class="variant-ghost-error h-6 w-14 text-center rounded-xl">Hard</div>
				{/if}
			</div>
			<p class="m-9">{exercise.intro}</p>
		</div>
	</a>
{/each}
