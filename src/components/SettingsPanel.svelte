<script lang="ts">
	// Initialisation des variables.
	let {
		showCenturies = $bindable( true ),
		showYears = $bindable( true ),
		showDays = $bindable( true ),
		showHours = $bindable( true ),
		showMinutes = $bindable( true ),
		showSeconds = $bindable( true )
	}: {
		showCenturies: boolean;
		showYears: boolean;
		showDays: boolean;
		showHours: boolean;
		showMinutes: boolean;
		showSeconds: boolean;
	} = $props();
</script>

<ul
	class="grid grid-cols-2 gap-x-6 gap-y-3 rounded-lg bg-zinc-900/60 p-4 text-sm text-gray-300"
>
	<li>
		<input
			id="showCenturies"
			type="checkbox"
			class="mr-1 accent-blue-600"
			bind:checked={showCenturies}
		/>
		<label for="showCenturies">Show centuries</label>
	</li>

	<li>
		<input
			id="showYears"
			type="checkbox"
			class="mr-1 accent-blue-600"
			bind:checked={showYears}
		/>
		<label for="showYears">Show years</label>
	</li>

	<li>
		<input
			id="showDays"
			type="checkbox"
			class="mr-1 accent-blue-600"
			bind:checked={showDays}
		/>
		<label for="showDays">Show days</label>
	</li>

	<li>
		<input
			id="showHours"
			type="checkbox"
			class="mr-1 accent-blue-600"
			bind:checked={showHours}
		/>
		<label for="showHours">Show hours</label>
	</li>

	<li>
		<input
			id="showMinutes"
			type="checkbox"
			class="mr-1 accent-blue-600"
			bind:checked={showMinutes}
		/>
		<label for="showMinutes">Show minutes</label>
	</li>

	<li>
		<input
			id="showSeconds"
			type="checkbox"
			class="mr-1 accent-blue-600"
			bind:checked={showSeconds}
		/>
		<label for="showSeconds">Show seconds</label>
	</li>
</ul>