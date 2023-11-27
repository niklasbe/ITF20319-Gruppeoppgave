<script lang="ts">
    import { saveTours, tours } from "$lib/Tour";
    import type { Tour } from "$lib/Tour";
    import { goto } from '$app/navigation';
    import { getFirstAvailableId } from "$lib/Tour";
    import { onMount } from 'svelte';
    import { Status, loginStatus, statusStrings, bookedTours } from '$lib/Tour';


    // empty tour object
    let tour: Tour = {
        id: 0,
        title: "",
        location: "",
        date: "",
        time: "",
        spots: 0,
        spotsLeft: 0,
        guide: "",
        price: 0,
        description: ""
    };

    function addTour() {
        if (tour.title == "") {
            alert("Du må fylle inn tittel");
            return;
        }
        tour.id = getFirstAvailableId();
        tours.push(tour);
        saveTours();
        console.log("Added tour: " + tour.title);
        // redirect to index
        goto("/");
    }

     /* redirect if not a guide */
     onMount(async () => {
        const storeValue = $loginStatus;
        if (!(storeValue === statusStrings[Status.Guide])) {
            goto('/');
        }
    });

</script>

<div class="container mx-auto"> 
    <article class="flex flex-col p-4 lg:my-16 lg:mx-24 gap-8 border rounded-lg">
        
        <!--Title, location-->
        <div class="flex flex-col lg:flex-row gap-8 w-full items-center">
            <!-- back -->
            <a href="/">
                <div class="rounded-lg shadow-lg border border-gray-400 hover:bg-slate-300">
                    <p class="p-4 text-xl">Tilbake</p>
                </div>
            </a>
            <h1 class="text-2xl p-4 grow">Ny tur</h1>

        </div>

        <!-- New tour -->
        <div>            
                <div class="flex flex-col gap-4 w-full">
                    <form class=m-2>
                        <label for="title">Tittel:</label>
                        <input class="border border-black rounded" type="text" id="title" name="title" bind:value="{tour.title}">
                    </form>

                    <form class=m-2>
                        <label for="description">Beskrivelse:</label>
                        <textarea id="description" name="description" bind:value="{tour.description}" class="w-full h-16 border border-black rounded"></textarea>
                    </form>
                </div>

                <div class="flex flex-col gap-2 w-full min-w-4">
                    <form class=m-2>
                        <label for="spotsLeft">Antall tilgjengelige plasser:</label>
                        <input class="border border-black rounded" type="number" id="spotsLeft" name="spotsLeft" min="1" max="10" bind:value="{tour.spotsLeft}">
                    </form>

                    <form class=m-2>
                        <label for="spots">Maks plasser:</label>
                        <input class="border border-black rounded" type="number" id="spots" name="spots" bind:value="{tour.spotsLeft}">
                    </form>
                    
                </div>
                <div class="flex flex-col lg:flex-row gap-10 w-full items-center min-w-4">
                    <form class=m-2>
                        <label for="location">Sted:</label>
                        <input class="border border-black rounded" type="text" id="location" name="location" bind:value="{tour.location}">
                    </form>

                    <form class=m-2>
                        <label for="guide">Guide:</label>
                        <input class="border border-black rounded" type="text" id="guide" name="guide" bind:value="{tour.guide}">
                    </form>

                    <form class=m-2>
                        <label for="price">Pris:</label>
                        <input class="border border-black rounded" type="number" id="price" name="price" min="0" max="10000" bind:value="{tour.price}">
                    </form>
                </div>
                <div class="flex flex-col lg:flex-row gap-10 w-full items-center min-w-4">
                    <form class=m-2>
                        <label for="date">Dato:</label>
                        <input class="border border-black rounded" type="date" id="date" name="date" bind:value="{tour.date}">
                    </form>

                    <form class=m-2>
                        <label for="time">Klokkeslett:</label>
                        <input class="border border-black rounded" type="time" id="time" name="time" bind:value="{tour.time}">
                    </form>
                </div>

                <!-- guide controls -->
                <div class="flex flex-col lg:flex-row gap-8 py-4 w-full items-center justify-left">
                    <!-- save -->
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={addTour}>
                        Legg ut tur
                    </button>
                </div>
                          
        </div>
    </article>
</div>
<!--<h1>{data.slug}</h1> */ -->

