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
	class="bg-zinc-900/60 rounded-lg p-4 grid grid-cols-2 gap-x-6 gap-y-3 text-gray-300 text-sm"
>
	<li>
		<input
			id="showCenturies"
			type="checkbox"
			class="accent-blue-600 mr-1"
			bind:checked={showCenturies}
		/>
		<label for="showCenturies">Show centuries</label>
	</li>

	<li>
		<input
			id="showYears"
			type="checkbox"
			class="accent-blue-600 mr-1"
			bind:checked={showYears}
		/>
		<label for="showYears">Show years</label>
	</li>

	<li>
		<input
			id="showDays"
			type="checkbox"
			class="accent-blue-600 mr-1"
			bind:checked={showDays}
		/>
		<label for="showDays">Show days</label>
	</li>

	<li>
		<input
			id="showHours"
			type="checkbox"
			class="accent-blue-600 mr-1"
			bind:checked={showHours}
		/>
		<label for="showHours">Show hours</label>
	</li>

	<li>
		<input
			id="showMinutes"
			type="checkbox"
			class="accent-blue-600 mr-1"
			bind:checked={showMinutes}
		/>
		<label for="showMinutes">Show minutes</label>
	</li>

	<li>
		<input
			id="showSeconds"
			type="checkbox"
			class="accent-blue-600 mr-1"
			bind:checked={showSeconds}
		/>
		<label for="showSeconds">Show seconds</label>
	</li>
</ul>