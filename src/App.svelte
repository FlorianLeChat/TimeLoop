<script lang="ts">
	// Importation des dépendances et composants.
	import dayjs from "dayjs";
	import { onMount, onDestroy } from "svelte";

	import TimeDisplay from "./components/TimeDisplay.svelte";
	import DateSelector from "./components/DateSelector.svelte";
	import SettingsPanel from "./components/SettingsPanel.svelte";
	import SaveLinkButton from "./components/SaveButton.svelte";
	import { eventsByRegion } from "./utilities/historical-events";
	import { calculateRemaining } from "./utilities/time-calculation";

	// Initialisation des variables.
	let startDate = $state( "" );
	let endDate = $state( "" );
	let startIsNow = $state( false );
	let endIsNow = $state( false );

	let showCenturies = $state( true );
	let showYears = $state( true );
	let showDays = $state( true );
	let showHours = $state( true );
	let showMinutes = $state( true );
	let showSeconds = $state( true );

	let timer: number;
	let remaining = $state( {
		centuries: 0,
		years: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	} );

	// Définition de la date de début à maintenant.
	const setStartNow = () =>
	{
		startIsNow = true;
		startDate = dayjs().format( "YYYY-MM-DDTHH:mm:ss" );
	};

	// Définition de la date de fin à maintenant.
	const setEndNow = () =>
	{
		endIsNow = true;
		endDate = dayjs().format( "YYYY-MM-DDTHH:mm:ss" );
	};

	// Gestion des changements de la date de début.
	const onChangeStart = ( value: string ) =>
	{
		startIsNow = value === "now";
		startDate = startIsNow ? dayjs().format( "YYYY-MM-DDTHH:mm:ss" ) : value;
	};

	// Gestion des changements de la date de fin.
	const onChangeEnd = ( value: string ) =>
	{
		endIsNow = value === "now";
		endDate = endIsNow ? dayjs().format( "YYYY-MM-DDTHH:mm:ss" ) : value;
	};

	// Opération de montage du composant.
	onMount( () =>
	{
		// Initialisation des dates de début et de fin à partir des paramètres d'URL.
		const parameters = new URLSearchParams( window.location.search );
		const start = parameters.get( "start" );
		const end = parameters.get( "end" );

		if ( start ) onChangeStart( start );
		if ( end ) onChangeEnd( end );

		// Mise à jour des dates de début et de fin si "maintenant" est sélectionné.
		timer = setInterval( () =>
		{
			if ( startIsNow )
			{
				startDate = dayjs().format( "YYYY-MM-DDTHH:mm:ss" );
			}

			if ( endIsNow )
			{
				endDate = dayjs().format( "YYYY-MM-DDTHH:mm:ss" );
			}

			// Calcul du temps restant entre les deux dates.
			remaining = calculateRemaining( startDate, endDate );
		}, 1000 );
	} );

	// Suppression du minuteur lors de la destruction du composant.
	onDestroy( () =>
	{
		clearInterval( timer );
	} );
</script>

<!-- Conteneur général de la page -->
<main class="mx-auto max-w-xl space-y-6 p-8 text-white scheme-dark">
	<!-- Logo GitHub -->
	<a
		rel="noopener noreferrer"
		href="https://github.com/FlorianLeChat/TimeLoop"
		class="group fixed top-0 right-0 bottom-auto left-auto [clip-path:polygon(0_0,100%_0,100%_100%)] max-sm:hidden"
		title="GitHub"
		target="_blank"
		aria-label="GitHub"
	>
		<svg width="80" height="80" viewBox="0 0 250 250">
			<path d="M0 0l115 115h15l12 27 108 108V0z" class="fill-white" />
			<path
				d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16"
				class="md:motion-safe:group-hover:animate-github max-md:motion-safe:animate-github origin-[130px_106px] fill-[#0b0809]"
			/>
			<path
				d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0
				5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41
				2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"
				class="fill-[#0b0809]"
			/>
		</svg>
	</a>

	<!-- Titre de la page -->
	<h1 class="text-center text-2xl font-bold">TimeLoop ⏳</h1>

	<!-- Sous-titre de la page -->
	<h2 class="text-center text-lg text-gray-400">
		A countdown website for future or past dates, ensuring you never forget
		how time flies.
	</h2>

	<!-- Sélecteurs de date et paramètres d'affichage -->
	<div class="flex flex-col gap-6">
		<DateSelector
			id="start-date-selector"
			label="Start date:"
			date={startDate}
			isNow={startIsNow}
			onNow={setStartNow}
			onChange={onChangeStart}
			events={eventsByRegion}
		/>

		<DateSelector
			id="end-date-selector"
			label="End date:"
			date={endDate}
			isNow={endIsNow}
			onNow={setEndNow}
			onChange={onChangeEnd}
			events={eventsByRegion}
		/>

		<SettingsPanel
			bind:showCenturies
			bind:showYears
			bind:showDays
			bind:showHours
			bind:showMinutes
			bind:showSeconds
		/>
	</div>

	<!-- Affichage du compte à rebours -->
	{#if startDate && endDate}
		<TimeDisplay
			{remaining}
			{startIsNow}
			{endIsNow}
			{showCenturies}
			{showYears}
			{showDays}
			{showHours}
			{showMinutes}
			{showSeconds}
		/>

		<!-- Bouton de sauvegarde de l'URL -->
		<SaveLinkButton {startDate} {endDate} {startIsNow} {endIsNow} />
	{/if}
</main>