<script lang="ts">
    import { getTourById } from "$lib/Tour";
    import { loginStatus } from '$lib/Tour';
    import { statusStrings } from '$lib/Tour';
    import { Status } from '$lib/Tour';

	export let data;
    console.log(data);

    // get tour by slug id
    let tour = getTourById(Number(data.slug))!;

    let booked = false;

    function bookTour() {
        tour.spotsLeft--;
        booked = true;
    }
    function unbookTour() {
        tour.spotsLeft++;
        booked = false;
    }

    // TODO (After persistent storage):
    // Check if user is already booked
    // If page_id in user's booked tours, set booked to true
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
            <h1 class="underline underline-offset-2 text-2xl p-4 grow">{tour.title}</h1>
            <div class="flex flex-row items-center">
                <img src="../map-pin.svg" alt="location" class="w-4 h-4 m-1" />
                <p class="m-2 font-light italic">{tour.location}</p>
            </div>
        </div>
        <!-- Row 2 -->
        <div class="flex flex-col lg:flex-row gap-8 w-full items-center">
            <!-- Date -->
            <div class="flex flex-row items-center">
                <img src="../calendar.svg" alt="date" class="w-4 h-4 m-1" />
                <p class="m-2 font-light italic">{tour.date}</p>
            </div>
            <!-- Time -->
            <div class="flex flex-row items-center">
                <img src="../clock.svg" alt="time" class="w-4 h-4 m-1" />
                <p class="m-2 font-light italic">{tour.time}</p>
            </div>
            <!-- Spots -->
            <div class="flex flex-row items-center">
                <img src="../users.svg" alt="spots" class="w-4 h-4 m-1" />
                <p class="m-2 font-light italic">{tour.spotsLeft}/{tour.spots}</p>
            </div>
        </div>
        <!-- Row 3 -->
        <div class="flex flex-col lg:flex-row gap-2 w-full items-center">
            <!-- Guide -->
            <div class="flex flex-row items-center">
                <img src="../user.svg" alt="guide" class="w-4 h-4 m-1" />
                <p class="m-2 font-light italic">{tour.guide}</p>
            </div>
            <!-- Price -->
            <div class="flex flex-row items-center">
                <img src="../dollar-sign.svg" alt="price" class="w-4 h-4 m-1" />
                <p class="m-2 font-light italic">{tour.price}</p>
            </div>
        </div>
        <!-- Description -->
        <div class="flex flex-col lg:flex-row gap-8 w-full items-center justify-between">
            <p>{tour.description}</p>
        </div>
        <!-- Book tour -->
        <div>
            {#if $loginStatus == statusStrings[Status.NotLoggedIn]}
                <p>Du må være logget inn som bruker for å bestille en tur.</p>
            {:else if $loginStatus == statusStrings[Status.Guide]}
                <p class="font-medium">Som guide kan du redigere turen din:</p>
                
                    
                <div class="flex flex-col gap-4 w-full">
                    <form>
                        <label for="title">Tittel:</label>
                        <input type="text" id="title" name="title" bind:value="{tour.title}">
                    </form>

                    <form>
                        <label for="description">Beskrivelse:</label>
                        <textarea id="description" name="description" bind:value="{tour.description}" class="w-full h-16"></textarea>
                    </form>
                </div>

                <div class="flex flex-col gap-2 w-full min-w-4">
                    <form>
                        <label for="spotsLeft">Antall tilgjengelige plasser:</label>
                        <input type="number" id="spotsLeft" name="spotsLeft" min="1" max="10" bind:value="{tour.spotsLeft}">
                    </form>

                    <form>
                        <label for="spots">Maks plasser:</label>
                        <input type="number" id="spots" name="spots" bind:value="{tour.spotsLeft}">

                    
                </div>
                <div class="flex flex-col lg:flex-row gap-10 w-full items-center min-w-4">
                    <form>
                        <label for="location">Sted:</label>
                        <input type="text" id="location" name="location" bind:value="{tour.location}">
                    </form>

                    <form>
                        <label for="guide">Guide:</label>
                        <input type="text" id="guide" name="guide" bind:value="{tour.guide}">
                    </form>

                    <form>
                        <label for="price">Pris:</label>
                        <input type="number" id="price" name="price" min="0" max="10000" bind:value="{tour.price}">
                    </form>
                </div>
                <div class="flex flex-col lg:flex-row gap-10 w-full items-center min-w-4">
                    <form>
                        <label for="date">Dato:</label>
                        <input type="date" id="date" name="date" bind:value="{tour.date}">
                    </form>

                    <form>
                        <label for="time">Klokkeslett:</label>
                        <input type="time" id="time" name="time" bind:value="{tour.time}">
                    </form>
                </div>
            {:else}
            {#if booked}
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={unbookTour}>
                    Turen er bestilt!
                </button>
                {:else if tour.spotsLeft > 0}
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={bookTour}>
                        Bestill Tur
                    </button>
                {:else}
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Turen er full!
                    </button>
                {/if}
            {/if}
            
        </div>
    </article>
</div>
<!--<h1>{data.slug}</h1> */ -->

