<script lang="ts">
    import { tours } from '$lib/Tour'
    
</script>


<div class="container mx-auto">
    <!-- main content flex -->
    <div class="flex flex-col p-4 lg:my-16 lg:mx-24 gap-8 border rounded-lg">

        <div class="flex flex-col lg:flex-row gap-8 w-full items-center">

			<!-- login -->
			<a href="login">
				<div class="rounded-lg shadow-lg border border-gray-400 hover:bg-slate-300">
					<p class="p-4 text-xl">Logg inn</p>
				</div>
			</a>

            <!-- title -->
			<p class="text-3xl lg:text-4xl p-2">Reiseguide</p>
        </div>

        <div>
            <p class="text-xl">Velkommen til reiseguiden for Norge!</p>
            <p class="text-xl">Her kan du finne informasjon om ulike steder i Norge, og hva du kan gjøre der.</p>
        </div>

        <!-- search -->
        <div>
            <form class="flex flex-col lg:flex-row gap-4">
                <input type="text" placeholder="Søk etter sted" class="p-2 w-full border border-gray-400 rounded-lg shadow-lg" />
                <button type="submit" class="p-2 border border-gray-400 rounded-lg shadow-lg hover:bg-slate-300">Søk</button>
            </form>
        </div>

        <!-- tours -->
        <div class="flex flex-col lg:flex-row flex-wrap gap-4">
			{#each tours as tour}
            <section class="flex flex-col grow border border-gray-400 rounded-lg shadow-lg hover:scale-100 ease-in-out duration-150 hover:-translate-y-1">
                <h3 class="m-4 font-semibold">{ tour.title }</h3>
                <p class="m-4">{tour.description }</p>
                <p class="m-4 font-light italic">{tour.date}</p>
                
            </section>
            {/each}
        </div>
    </div>
</div>
