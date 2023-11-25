
import { getTourById } from '$lib/Tour.js'
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {

    /* if tour doesn't exist */
    if (getTourById(Number(params.slug)) == undefined) {
        throw redirect(308, '/');
    }
    
    return {
        slug: params.slug
    }
}

