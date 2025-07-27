<script lang="ts">
	// Importation des dépendances et composants.
	import NumberFlow from "@number-flow/svelte";

	// Initialisation des variables.
	let {
		label = $bindable( "" ),
		value = $bindable( 0 )
	}: {
		label: string;
		value: number;
	} = $props();
</script>

<div class="flex flex-col items-center">
	<NumberFlow trend={0} {value} format={{ minimumIntegerDigits: 2 }} />

	<span class="text-sm mt-1">{label}</span>
</div>