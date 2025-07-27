<script lang="ts">
	// Importation des dépendances et composants.
	import type { EventProperties } from "../interfaces/EventProperties";

	// Initialisation des variables.
	let {
		label = $bindable( "" ),
		date = $bindable( "" ),
		isNow = $bindable( false ),
		onNow = $bindable( () => {} ),
		onChange = $bindable( ( value: string ) =>
		{
			// Fonction par défaut pour gérer le changement de date.
			console.log( "Date changed to:", value );
		} ),
		events = $bindable( [] )
	}: {
		label: string;
		date: string;
		isNow: boolean;
		onNow: () => void;
		onChange: ( value: string ) => void;
		events: EventProperties[];
	} = $props();
</script>

<div class="flex flex-col gap-2">
	<div class="flex items-center justify-between">
		<!-- Affichage du label pour la date -->
		<span>{label}</span>

		<!-- Bouton pour définir la date actuelle -->
		<button
			type="button"
			class="text-sm text-blue-400 hover:underline"
			onclick={onNow}>Now</button
		>
	</div>

	<!-- Champ de saisie pour la date -->
	<input
		type="datetime-local"
		class="p-2 border border-gray-600 rounded-md"
		oninput={( event ) => onChange( event.currentTarget.value )}
		bind:value={date}
	/>

	<!-- Sélecteur pour les événements historiques -->
	<select
		class="mt-2 p-2 bg-zinc-950 rounded-md border border-gray-600 text-gray-300"
		onchange={( event ) => onChange( event.currentTarget.value )}
	>
		<option value="" selected disabled>Or select historic event</option>

		{#each Object.entries( events ) as [ region, items ] ( region )}
			<optgroup label={region}>
				{#each items as item ( item.date )}
					<option value={item.date}>{item.label}</option>
				{/each}
			</optgroup>
		{/each}
	</select>
</div>