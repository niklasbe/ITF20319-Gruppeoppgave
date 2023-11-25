<script lang="ts">
    import { tours } from '$lib/Tour'


    import { loginStatus } from '$lib/Tour';
    import { statusStrings } from '$lib/Tour';
    import { Status } from '$lib/Tour';
    


    /* code for searching tours */
    let searchTerm = '';    
    let filteredTours = tours;

    function searchTours() {
        console.log(searchTerm);
        filteredTours = tours.filter(tour => tour.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

</script>


<div class="container mx-auto">
    <!-- main content flex -->
    <div class="flex flex-col p-4 lg:my-16 lg:mx-24 gap-8 border rounded-lg">

        <div class="flex flex-col lg:flex-row gap-8 w-full items-center justify-between">

			<!-- login -->
            {#if $loginStatus === statusStrings[Status.NotLoggedIn]}
                <a href="login">
                    <div class="rounded-lg shadow-lg border border-gray-400 hover:bg-slate-300">
                        <p class="p-4 text-xl">Logg inn</p>
                    </div>
                </a>
            {:else}
                <a href="profile">
                    <div class="rounded-lg shadow-lg border border-gray-400 hover:bg-slate-300">
                        <p class="p-4 text-xl">Profil</p>
                    </div>
                </a>
            {/if}

            <!-- title -->
			<p class="text-3xl lg:text-4xl p-4">Reiseguide</p>

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

        <div>
            <p class="text-xl">Velkommen til reiseguiden for Norge!</p>
            <p class="text-xl">Her kan du finne informasjon om ulike steder i Norge, og hva du kan gjøre der.</p>
        </div>

        <!-- search -->
        <div>
            <input type="text" placeholder="Søk etter sted" class="p-2 w-full border border-gray-400 rounded-lg shadow-lg" 
            bind:value={searchTerm}
            on:input={searchTours}
            />
        </div>

        <!-- tours -->
        <div class="flex flex-col lg:flex-row flex-wrap gap-4">
            {#if filteredTours.length === 0}
                <p class="text-xl">Ingen treff.</p>
            {:else}
            {#each filteredTours as tour}
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
            {/each}
            {/if}
        </div>
    </div>
</div>
