<script lang="ts">
	// Importation des dépendances et composants.
	import dayjs from "dayjs";
	import { onMount, onDestroy } from "svelte";

	import DateSelector from "./components/DateSelector.svelte";
	import TimeDisplay from "./components/TimeDisplay.svelte";
	import SettingsPanel from "./components/SettingsPanel.svelte";
	import SaveLinkButton from "./components/SaveButton.svelte";
	import { calculateRemaining } from "./utilities/time-calculation";
	import { eventsByRegion } from "./utilities/historical-events";

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

<main class="p-8 max-w-xl mx-auto text-white space-y-6">
	<!-- Titre de la page -->
	<h1 class="text-2xl font-bold text-center">TimeLoop ⏳</h1>

	<!-- Sous-titre de la page -->
	<h2 class="text-lg text-center text-gray-400">
		A countdown website for future or past dates, ensuring you never forget
		how time flies.
	</h2>

	<!-- Sélecteurs de date et paramètres d'affichage -->
	<div class="flex flex-col gap-6">
		<DateSelector
			label="Start date:"
			date={startDate}
			isNow={startIsNow}
			onNow={setStartNow}
			onChange={onChangeStart}
			events={eventsByRegion}
		/>

		<DateSelector
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
	{#if startDate}
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