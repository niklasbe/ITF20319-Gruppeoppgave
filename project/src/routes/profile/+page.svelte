<script lang="ts">
import { onMount } from 'svelte';
import { goto } from '$app/navigation'; // for SvelteKit
// import { goto } from '@sapper/app'; // for Sapper
import { Status, loginStatus, statusStrings } from '$lib/Tour';


/* redirect if not logged in */
onMount(async () => {
    const storeValue = $loginStatus;
    if (storeValue === statusStrings[Status.NotLoggedIn]) {
        goto('/');
    }
});
</script>

<div class="container mx-auto">
    <!-- main content flex -->
    <div class="flex flex-col p-4 lg:my-16 lg:mx-24 gap-8 border rounded-lg">
        
        <div class="flex flex-col lg:flex-row gap-8 w-full items-center justify-between">
            
            <!-- back -->
            <a href="/">
                <div class="rounded-lg shadow-lg border border-gray-400 hover:bg-slate-300">
                    <p class="p-4 text-xl">Tilbake</p>
                </div>
            </a>
            
            
            <!-- title -->
			<p class="text-3xl lg:text-4xl p-4">Profil</p>

            <!-- login status -->
            {#if $loginStatus === statusStrings[Status.User]}
                <p>Logget inn som bruker.</p>
            {:else if $loginStatus === statusStrings[Status.Guide]}
                <p>Logget inn som guide.</p>
            {:else if $loginStatus === statusStrings[Status.Admin]}
                <p>Logget inn som admin.</p>
            {:else}
                <p>Ikke logget inn.</p>
            {/if}
            
        </div>
        
    </div>
</div>
