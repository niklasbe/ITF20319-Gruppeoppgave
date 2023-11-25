<script lang="ts">
    import { getTourById } from "$lib/Tour";

	export let data;
    console.log(data);

    // get tour by slug id
    let tour = getTourById(Number(data.slug))!;

</script>

<div class="container mx-auto"> 
    <article class="flex flex-col p-4 lg:my-16 lg:mx-24 gap-8 border rounded-lg">
        <!--Title, location-->
        <div class="flex flex-col lg:flex-row gap-8 w-full items-center justify-between">
            <h1 class="underline underline-offset-2 text-2xl p-4">{tour.title}</h1>
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
    </article>
</div>
<!--<h1>{data.slug}</h1> */ -->

