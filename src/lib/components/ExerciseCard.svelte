<script lang="ts">
	import UserInput from './exerciseComponents/UserInput.svelte';
	import Icon from '../assets/arrow-left.svelte';
	import Components from './exerciseComponents/Components.svelte';
	import Intro from './exerciseComponents/Intro.svelte';
	import Solution from './exerciseComponents/Solution.svelte';
	import Story from './exerciseComponents/Story.svelte';
	export let exercise: string;
	import data from '../data/tutorials.json';

	console.log('data.tutorials:', data.tutorials);
	console.log('exercise:', exercise);

	interface Tutorial {
		id: string;
		intro: string;
		components: Array<{
			name: string;
			description: string;
			functions: string;
		}>;
		story: string;
		user_input: {
			active: boolean;
			measurement_type: string;
			unit: string;
		};
		solution: {
			explanation: string;
			code: string;
		};
	}

	function findTutorialIndexById(tutorials: Tutorial[], tutorialId: string): number {
		return tutorials.findIndex((tutorial) => tutorial.id === tutorialId);
	}

	let tutorialIndex = findTutorialIndexById(data.tutorials, exercise);
	let currentTutorial = data.tutorials[tutorialIndex];
</script>

<div class="card variant-soft p-16">
	<header class="card-header">
		<div class="flex align-baseline space-x-5">
			<a href="/exercises" class="btn p-0 bg-white w-12 h-12 variant-ghost-secondary rounded-2xl">
				<Icon />
			</a>
			<h1 class="h1">
				<span
					class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text
                    text-transparent box-decoration-clone"
				>
					{currentTutorial.title}
				</span>
			</h1>
		</div>
	</header>
	<section class="p-4">
		{#if currentTutorial}
			<Intro intro={currentTutorial.intro} />

			<Components components={currentTutorial.components} />

			<Story story={currentTutorial.story} />

			<!-- <UserInput userInput={currentTutorial.user_input} id={currentTutorial.id} /> -->

			<Solution solution={currentTutorial.solution} />
		{:else}
			<p>No tutorial found for exercise {exercise}</p>
		{/if}
	</section>
</div>
