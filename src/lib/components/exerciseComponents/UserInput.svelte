<script lang="ts">
	const mqtt = require('mqtt');
	const client = mqtt.connect('mqtt://172.17.0.1');
	let temperature = '';

	interface UserInput {
		active: boolean;
		measurement_type: string;
		unit: string;
	}
	export let id = '';
	export let userInput: UserInput = {
		active: false,
		measurement_type: '',
		unit: ''
	};
</script>

{#if userInput.active}
	<div class="mt-5 mb-5">
		<h2 class="h2">Input</h2>
		<div class="card p-5 rounded-xl">
			<span class="font-extrabold text-2xl">ID23424/{id}/S</span>
			<div>
				<span class="text-xl">{userInput.measurement_type}: </span><span
					>{temperature}{userInput.unit}</span
				>
			</div>
		</div>
	</div>
{/if}
