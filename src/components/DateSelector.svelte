<script lang="ts">
	// Importation des dépendances et composants.
	import dayjs from "dayjs";
	import type { EventProperties } from "../interfaces/EventProperties";

	// Initialisation des variables.
	const minEndDate = dayjs().format( "YYYY-MM-DDTHH:mm:ss" );
	const maxStartDate = dayjs().endOf( "day" ).format( "YYYY-MM-DDTHH:mm:ss" );

	let selectedDate = $state( "" );
	let {
		id = "",
		label = $bindable( "" ),
		date = $bindable( "" ),
		isNow = $bindable( false ),
		onNow = $bindable( () => {} ),
		onChange = $bindable( ( value: string ) =>
		{
			// Fonction par défaut pour gérer le changement de date.
			console.log( "Date changed to:", value );
		} ),
		events = $bindable( {} )
	}: {
		id: string;
		label: string;
		date: string;
		isNow: boolean;
		onNow: () => void;
		onChange: ( value: string ) => void;
		events: Record<string, EventProperties[]>;
	} = $props();
</script>

<div class="flex flex-col gap-2">
	<div class="flex items-center justify-between">
		<!-- Affichage du libellé pour la date -->
		<span>{label}</span>

		<!-- Bouton pour définir la date actuelle -->
		<button
			type="button"
			class="text-sm text-blue-400 cursor-pointer hover:underline"
			onclick={() =>
			{
				// Réinitialisation de la date historique
				//  sélectionnée si on veut la date actuelle.
				selectedDate = "";

				onNow();
			}}>Now</button
		>
	</div>

	<!-- Champ de saisie pour la date -->
	<input
		min={id === "end-date-selector" ? minEndDate : undefined}
		max={id === "start-date-selector" ? maxStartDate : undefined}
		type="datetime-local"
		class="p-2 border border-gray-600 rounded-md"
		oninput={( event ) =>
		{
			// Réinitialisation de la date historique
			//  sélectionnée si on saisit une nouvelle date.
			selectedDate = "";
			onChange( event.currentTarget.value );
		}}
		bind:value={date}
	/>

	<!-- Sélecteur pour les événements historiques -->
	<select
		class="mt-2 p-2 bg-zinc-950 rounded-md border border-gray-600 text-gray-300"
		onchange={( event ) => onChange( event.currentTarget.value )}
		bind:value={selectedDate}
	>
		<option value="" selected disabled>Or select a historical event</option>

		{#each Object.entries( events ) as [ region, items ] ( region )}
			<optgroup label={region}>
				{#each items as item ( item.date )}
					<option value={item.date}>{item.label}</option>
				{/each}
			</optgroup>
		{/each}
	</select>

	<!-- Affichage de la date sélectionnée -->
	{#if selectedDate}
		{@const regionData = Object.keys( events ).find( ( region ) =>
			events[ region ].some( ( item ) => item.date === selectedDate )
		)}
		{@const eventData = events[ regionData ?? "" ]?.find(
			( item ) => item.date === selectedDate
		)}

		<a
			rel="noopener noreferrer"
			href={eventData?.link}
			class="text-sm inline-block w-[fit-content] break-all text-gray-400 underline underline-offset-2 decoration-dotted hover:text-blue-400"
			target="_blank"
		>
			{eventData?.link}</a
		>
	{/if}
</div>