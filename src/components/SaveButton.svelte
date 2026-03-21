<script lang="ts">
    import { SvelteURLSearchParams } from "svelte/reactivity";

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

    const saveToURL = async () =>
    {
        const parameters = new SvelteURLSearchParams( window.location.search );
        parameters.set( "start", startIsNow ? "now" : startDate );
        parameters.set( "end", endIsNow ? "now" : endDate );

        const url = `${ window.location.origin }${ window.location.pathname }?${ parameters.toString() }`;
        history.replaceState( null, "", url );

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
    class="mx-auto mt-8 block cursor-pointer rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
    onclick={saveToURL}
>
    🔗 Save current countdown
</button>
