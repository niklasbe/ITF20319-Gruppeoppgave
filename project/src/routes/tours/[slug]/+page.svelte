<script lang="ts">
    import { getTourById } from "$lib/Tour";
    import { loginStatus } from '$lib/Tour';
    import { statusStrings } from '$lib/Tour';
    import { Status } from '$lib/Tour';
    import { bookedTours } from "$lib/Tour";
    import { tours } from "$lib/Tour";
	export let data;

    // get tour by slug id
    let tour = getTourById(Number(data.slug))!;

    let booked = false;
    bookedTours.forEach(t => {
        if (t.id == tour.id) {
            booked = true;
            return;
        }
    });

    let newTour = {
        id: tour.id,
        title: tour.title,
        description: tour.description,
        spotsLeft: tour.spotsLeft,
        spots: tour.spots,
        location: tour.location,
        guide: tour.guide,
        price: tour.price,
        date: tour.date,
        time: tour.time
    }

    function bookTour() {
        tour.spotsLeft--;
        booked = true;
        bookedTours.push(tour);
    }
    function unbookTour() {
        tour.spotsLeft++;
        booked = false;
        bookedTours.splice(bookedTours.indexOf(tour), 1);
    }
    function saveTour() {
        tour.title = newTour.title;
        tour.description = newTour.description;
        tour.spotsLeft = newTour.spotsLeft;
        tour.spots = newTour.spots;
        tour.location = newTour.location;
        tour.guide = newTour.guide;
        tour.price = newTour.price;
        tour.date = newTour.date;
        tour.time = newTour.time;
    }
    function deleteTour() {
        console.log("Deleting tour: " + tour.title);
        tours.splice(tours.indexOf(tour), 1);
    }

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
                    <form class=m-2>
                        <label for="title">Tittel:</label>
                        <input class="border border-black rounded" type="text" id="title" name="title" bind:value="{newTour.title}">
                    </form>

                    <form class=m-2>
                        <label for="description">Beskrivelse:</label>
                        <textarea id="description" name="description" bind:value="{newTour.description}" class="w-full h-16 border border-black rounded"></textarea>
                    </form>
                </div>

                <div class="flex flex-col gap-2 w-full min-w-4">
                    <form class=m-2>
                        <label for="spotsLeft">Antall tilgjengelige plasser:</label>
                        <input class="border border-black rounded" type="number" id="spotsLeft" name="spotsLeft" min="1" max="10" bind:value="{newTour.spotsLeft}">
                    </form>

                    <form class=m-2>
                        <label for="spots">Maks plasser:</label>
                        <input class="border border-black rounded" type="number" id="spots" name="spots" bind:value="{newTour.spotsLeft}">
                    </form>
                    
                </div>
                <div class="flex flex-col lg:flex-row gap-10 w-full items-center min-w-4">
                    <form class=m-2>
                        <label for="location">Sted:</label>
                        <input class="border border-black rounded" type="text" id="location" name="location" bind:value="{newTour.location}">
                    </form>

                    <form class=m-2>
                        <label for="guide">Guide:</label>
                        <input class="border border-black rounded" type="text" id="guide" name="guide" bind:value="{newTour.guide}">
                    </form>

                    <form class=m-2>
                        <label for="price">Pris:</label>
                        <input class="border border-black rounded" type="number" id="price" name="price" min="0" max="10000" bind:value="{newTour.price}">
                    </form>
                </div>
                <div class="flex flex-col lg:flex-row gap-10 w-full items-center min-w-4">
                    <form class=m-2>
                        <label for="date">Dato:</label>
                        <input class="border border-black rounded" type="date" id="date" name="date" bind:value="{newTour.date}">
                    </form>

                    <form class=m-2>
                        <label for="time">Klokkeslett:</label>
                        <input class="border border-black rounded" type="time" id="time" name="time" bind:value="{newTour.time}">
                    </form>
                </div>

                <!-- guide controls -->
                <div class="flex flex-col lg:flex-row gap-8 py-4 w-full items-center justify-left">
                    <!-- save -->
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={saveTour}>
                        Lagre endringer
                    </button>
                    <!-- delete -->
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" on:click={deleteTour}>
                        Slett tur
                    </button>
                </div>


            {:else if $loginStatus == statusStrings[Status.Admin]}   

            <!-- admin controls -->
            <div class="flex flex-col lg:flex-row gap-8 w-full py-4 items-center justify-left">

                <button class="py-2 px-4 rounded border border-gray-400 hover:bg-slate-300 font-bold" on:click={() => alert('Send mail til turguiden her')}>
                    Kontakt turguide
                </button>
                <a href="/">
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" on:click={deleteTour}>
                        Slett tur
                    </button>
                </a>
            </div>
            {:else}

            <!-- user controls -->
            <div class="flex flex-col lg:flex-row gap-8 w-full py-4 items-center justify-left">

                <!-- contact -->
                <button class="py-2 px-4 rounded border border-gray-400 hover:bg-slate-300 font-bold" on:click={() => alert('Send mail til turguiden her')}>
                    Kontakt turguide
                </button>
                
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
            </div>
            {/if}
                
        </div>
    </article>
</div>
<!--<h1>{data.slug}</h1> */ -->

