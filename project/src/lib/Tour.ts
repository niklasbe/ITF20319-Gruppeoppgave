import { writable } from "svelte/store";
import jsonData from "../tours.json";

// create a typescript array of tours from the json data
export const tours: Tour[] = jsonData;

export let bookedTours: Tour[] = [];

export interface Tour {
    id: number;
    date: string;
    time: string;
    location: string;
    title: string;
    description: string;
    price: number;
    spots: number;
    spotsLeft: number;
    guide: string;
}


export enum Status {
    NotLoggedIn,
    User,
    Guide,
    Admin
}


export const getTourById = (id: number): Tour | undefined => {
    return tours.find(tour => tour.id === id);
}

export const statusStrings = ["NotLoggedIn", "User", "Guide", "Admin"];

export const loginStatus = writable(statusStrings[Status.NotLoggedIn]);