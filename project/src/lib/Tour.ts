import { writable } from "svelte/store";
import jsonData from "../tours.json";

// create a typescript array of tours from the json data
export const tours: Tour[] = jsonData;

// store booked tours in a separate array
export const bookedTours: Tour[] = [];

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

/* 
    Returns a tour with the given id
    If no tour is found, return undefined
*/
export const getTourById = (id: number): Tour | undefined => {
    return tours.find(tour => tour.id === id);
}

export const getFirstAvailableId = (): number => {
    let id = 0;
    if (tours) {
        for (let i = 0; i < tours.length; i++) {
            if (tours[i].id > id) {
                id = tours[i].id;
            }
        }
    }
    return id + 1;
}


export const statusStrings = ["NotLoggedIn", "User", "Guide", "Admin"];

export const loginStatus = writable(statusStrings[Status.NotLoggedIn]);