<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { Status, loginStatus, statusStrings, bookedTours, tours} from '$lib/Tour';
    
    function handleLogOffClick() {
        loginStatus.set(statusStrings[Status.NotLoggedIn]);
    }
    
    /* redirect if not logged in */
    onMount(async () => {
        const storeValue = $loginStatus;
        if (storeValue === statusStrings[Status.NotLoggedIn]) {
            goto('/');
        }
    });

    function deleteTour(tourId: number): void {
        const tourIndex = tours.findIndex(tour => tour.id === tourId);
        if (tourIndex > -1) {
            console.log("Deleting tour: " + tours[tourIndex].title);
            tours.splice(tourIndex, 1);
        }
}

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
        <div class="flex flex-col lg:flex-row gap-8">
            <!-- log off -->
            <a href="/" on:click={handleLogOffClick}>
                <div class="rounded-lg shadow-lg border border-gray-400 hover:bg-slate-300">
                    <p class="p-4 text-xl">Logg ut</p>
                </div>
            </a>
            {#if $loginStatus === statusStrings[Status.Guide]}
            <a href="new">
                <div class="rounded-lg shadow-lg border border-gray-400 hover:bg-slate-300">
                    <p class="p-4 text-xl">Ny tur</p>
                </div>
            </a>
            {/if}
        </div>

        {#if $loginStatus === statusStrings[Status.User]}
        <p class="text-xl">Bestilte turer:</p>
        
        <!-- booked tours -->
        <!-- currently only shows the booked tours -->
        
        <div class="flex flex-col lg:flex-row flex-wrap gap-4">
            {#each bookedTours as tour (tour.id)}
            <a href="tours/{tour.id}">
                
                <article class="flex flex-col grow border border-gray-400 rounded-lg shadow-lg hover:scale-100 ease-in-out duration-150 hover:-translate-y-1">
                    <h3 class="m-4 font-semibold">{tour.title}</h3>
                    <p class="m-4">{tour.description}</p>
                    <div class="flex flex-col">
                        <div class="flex flex-row items-center">
                            <img src="clock.svg" alt="clock" class="w-4 h-4 m-4" />
                            <p class="m-4 font-light italic">{tour.time}</p>
                        </div>
                        <div class="flex flex-row">
                            <img src="calendar.svg" alt="calendar" class="w-4 h-4 m-4" />
                            <p class="m-4 font-light italic">{tour.date}</p>
                        </div>
                        <div class="flex flex-row items-center">
                            <img src="map-pin.svg" alt="location" class="w-4 h-4 m-4" />
                            <p class="m-4 font-light italic">{tour.location}</p>
                        </div>
                        <div class="flex flex-row items-center">
                            <img src="dollar-sign.svg" alt="price" class="w-4 h-4 m-4" />
                            <p class="m-4 font-light italic">{tour.price}</p>
                        </div>
                    </div>
                </article>
            </a>
            {/each}
        </div>
        <!-- display guide's tours -->
        <!-- for the sake of this prototype, there is only a single guide controlling all tours -->
        <!-- so just display all tours -->
        {:else if $loginStatus === statusStrings[Status.Guide]}
        <p class="text-xl">Dine turer:</p>
        {#if bookedTours.length === 0}
                <p class="text-xl">Ingen turer registrert.</p>
        {/if}
        <div class="flex flex-col lg:flex-row flex-wrap gap-4">
            {#each tours as tour (tour.id)}
            <a href="tours/{tour.id}">
                <article class="flex flex-col grow border border-gray-400 rounded-lg shadow-lg hover:scale-100 ease-in-out duration-150 hover:-translate-y-1">
                    <h3 class="m-4 font-semibold">{tour.title}</h3>
                    <p class="m-4">{tour.description}</p>
                    <div class="flex flex-col">
                        <div class="flex flex-row items-center">
                            <img src="clock.svg" alt="clock" class="w-4 h-4 m-4" />
                            <p class="m-4 font-light italic">{tour.time}</p>
                        </div>
                        <div class="flex flex-row">
                            <img src="calendar.svg" alt="calendar" class="w-4 h-4 m-4" />
                            <p class="m-4 font-light italic">{tour.date}</p>
                        </div>
                        <div class="flex flex-row items-center">
                            <img src="map-pin.svg" alt="location" class="w-4 h-4 m-4" />
                            <p class="m-4 font-light italic">{tour.location}</p>
                        </div>
                        <div class="flex flex-row items-center">
                            <img src="dollar-sign.svg" alt="price" class="w-4 h-4 m-4" />
                            <p class="m-4 font-light italic">{tour.price}</p>
                        </div>
                    </div>
                </article>
            </a>
            {/each}
            
        </div>
        {:else if $loginStatus === statusStrings[Status.Admin]}
            {#each tours as tour (tour.id)}
                <div class="flex flex-col border border-gray-400 grow  rounded-lg shadow-lg hover:scale-100 ease-in-out duration-150 hover:-translate-y-1">
                    <a href="tours/{tour.id}">
                    <article class="flex flex-col ">
                        <h3 class="m-4 font-semibold">{tour.title}</h3>
                        <p class="m-4">{tour.description}</p>
                        <div class="flex flex-col">
                            <div class="flex flex-row items-center">
                                <img src="clock.svg" alt="clock" class="w-4 h-4 m-4" />
                                <p class="m-4 font-light italic">{tour.time}</p>
                            </div>
                            <div class="flex flex-row">
                                <img src="calendar.svg" alt="calendar" class="w-4 h-4 m-4" />
                                <p class="m-4 font-light italic">{tour.date}</p>
                            </div>
                            <div class="flex flex-row items-center">
                                <img src="map-pin.svg" alt="location" class="w-4 h-4 m-4" />
                                <p class="m-4 font-light italic">{tour.location}</p>
                            </div>
                            <div class="flex flex-row items-center">
                                <img src="dollar-sign.svg" alt="price" class="w-4 h-4 m-4" />
                                <p class="m-4 font-light italic">{tour.price}</p>
                            </div>
                            
                        </div>
                    </article>
                    </a>
                    <!-- How make dis update??? -->
                    <a href="/">
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4 w-40" on:click={() => deleteTour(tour.id)}>
                            Slett tur
                        </button>
                    </a>
                </div>
                {/each}
        {/if}

        
    </div>
</div>
