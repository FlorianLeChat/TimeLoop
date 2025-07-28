<script lang="ts">
	// Importation des dépendances et composants.
	import TimeUnit from "./TimeUnit.svelte";
	import { NumberFlowGroup } from "@number-flow/svelte";

	// Initialisation des variables.
	let {
		remaining = $bindable( null ),
		startIsNow = $bindable( false ),
		endIsNow = $bindable( false ),
		showCenturies = $bindable( true ),
		showYears = $bindable( true ),
		showDays = $bindable( true ),
		showHours = $bindable( true ),
		showMinutes = $bindable( true ),
		showSeconds = $bindable( true )
	}: {
		remaining: Record<string, number> | null;
		startIsNow: boolean;
		endIsNow: boolean;
		showCenturies: boolean;
		showYears: boolean;
		showDays: boolean;
		showHours: boolean;
		showMinutes: boolean;
		showSeconds: boolean;
	} = $props();
</script>

{#if remaining}
	<NumberFlowGroup>
		<!-- Affichage du titre en fonction des dates -->
		<p class="text-sm text-gray-400">
			{#if startIsNow}
				Remaining time from now:
			{:else if endIsNow}
				Remaining time until now:
			{:else}
				Time between start and end dates:
			{/if}
		</p>

		<!-- Affichage des unités de temps -->
		<div
			class="flex justify-center max-sm:flex-col max-sm:items-center space-x-6 text-5xl font-mono select-none"
		>
			{#if showCenturies}
				<TimeUnit label="centuries" value={remaining.centuries} />
			{/if}

			{#if showYears}
				<TimeUnit label="years" value={remaining.years} />
			{/if}

			{#if showDays}
				<TimeUnit label="days" value={remaining.days} />
			{/if}

			{#if showHours}
				<TimeUnit label="hours" value={remaining.hours} />
			{/if}

			{#if showMinutes}
				<TimeUnit label="minutes" value={remaining.minutes} />
			{/if}

			{#if showSeconds}
				<TimeUnit label="seconds" value={remaining.seconds} />
			{/if}
		</div>
	</NumberFlowGroup>
{/if}