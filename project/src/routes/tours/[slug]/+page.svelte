<script lang="ts">
    import { getTourById } from "$lib/Tour";

	export let data;
    console.log(data);

    // get tour by slug id
    let tour = getTourById(Number(data.slug))!;

</script>

<h1>{data.slug}</h1>
<p>{tour.title}</p>
<p>{tour.description}</p>
<p>{tour.price}</p>
