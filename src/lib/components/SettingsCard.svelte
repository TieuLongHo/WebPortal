<script lang="ts">
	let show_password: boolean = false;
	$: type = show_password ? 'text' : 'password';
</script>

<div class="card variant-soft p-16">
	<h1 class="font-light text-3xl pb-12">Change Access Point Settings</h1>
	<form class="flex align-sub">
		<div>
			<label class="label">
				<span>New SSID</span>
				<input type="text" placeholder="ssid" class="input" />
			</label>
			<label class="label">
				<span>New Password</span>
				<input {type} placeholder="password" class="input" />
			</label>
			<div class="inline-flex align-middle space-x-5 mt-5">
				<label class="label flex align-middle space-x-3">
					<span>Show Password</span>
					<input type="checkbox" bind:checked={show_password} class="input w-5 h-5 rounded-none" />
				</label>
				<button type="submit" class="btn variant-ghost-secondary">Save and Reboot</button>
			</div>
		</div>
	</form>
</div>
