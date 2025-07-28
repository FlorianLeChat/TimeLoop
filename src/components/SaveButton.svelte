<script lang="ts">
	// Importation des dépendances et composants.
	import { SvelteURLSearchParams } from "svelte/reactivity";

	// Initialisation des variables.
	let {
		startDate = $bindable( "" ),
		endDate = $bindable( "" ),
		startIsNow = $bindable( false ),
		endIsNow = $bindable( false )
	}: {
		startDate: string;
		endDate: string;
		startIsNow: boolean;
		endIsNow: boolean;
	} = $props();

	// Fonction de sauvegarde de l'URL dans la barre d'adresse
	//  avec copie dans le presse-papiers
	const saveToURL = async () =>
	{
		const parameters = new SvelteURLSearchParams( window.location.search );
		parameters.set( "start", startIsNow ? "now" : startDate );
		parameters.set( "end", endIsNow ? "now" : endDate );

		const url = `${ window.location.origin }${ window.location.pathname }?${ parameters.toString() }`;
		history.replaceState( null, "", url ); // Remplacement de l'URL actuelle sans recharger la page.

		try
		{
			await navigator.clipboard.writeText( url );
			alert( "URL copied to clipboard!" );
		}
		catch ( error )
		{
			console.error( "Failed to copy URL:", error );
		}
	};
</script>

<button
	class="mt-8 mx-auto block px-4 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 rounded text-white text-sm"
	onclick={saveToURL}
>
	🔗 Save current countdown
</button>