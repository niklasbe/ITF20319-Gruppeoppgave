import { writable } from "svelte/store";
import jsonData from "../tours.json";

/**
 * Represents a tour.
 */
export interface Tour {
    id: number;             /* The unique identifier of the tour. */
    date: string;           /* The date of the tour in ISO 8601 format (YYYY-MM-DD). */
    time: string;           /* The time of the tour in 24-hour format (HH:MM). */
    location: string;       /* The location where the tour will take place. */
    title: string;          /* The title or name of the tour. */
    description: string;    /* A brief description of what the tour entails. */
    price: number;          /* The price of the tour per person. */
    spots: number;          /* The total number of spots available for the tour. */
    spotsLeft: number;      /* The number of spots left available for booking. */
    guide: string;          /* The name of the guide leading the tour. */
}



/**
 * Saves the booked tours to local storage.
 * 
 * This function takes the global array of booked tours, converts it into a JSON string,
 * and then stores this string in local storage under the key "bookedTours".
 */
export const saveBookedTours = () => {
    localStorage.setItem("bookedTours", JSON.stringify(bookedTours));
}

/**
 * Saves the tours to local storage.
 * 
 * This function takes the global array of tours, converts it into a JSON string,
 * and then stores this string in local storage under the key "tours".
 */
export const saveTours = () => {
    localStorage.setItem("tours", JSON.stringify(tours));
}

/**
 * Loads the tours from local storage.
 * 
 * This function retrieves the "tours" item from local storage.
 * If the "tours" item exists, it parses the JSON string into an array of Tour objects and returns it.
 * If the "tours" item does not exist, it returns the array of Tour objects from the tours.json file.
 * 
 * @returns {Tour[]} An array of Tour objects.
 */
export const loadTours = () => {
    const tmp_tours = localStorage.getItem("tours");
    if (tmp_tours) {
        tours = JSON.parse(tmp_tours) as Tour[];
        return;
    }
    tours = jsonData;
}

/**
 * Loads the booked tours from local storage.
 * 
 * This function retrieves the "bookedTours" item from local storage.
 * If the "bookedTours" item exists, it parses the JSON string into an array of Tour objects and returns it.
 * If the "bookedTours" item does not exist, it returns an empty array.
 * 
 * @returns {Tour[]} An array of Tour objects that have been booked.
 */
export const loadBookedTours = () => {
    const tmp_tours = localStorage.getItem("bookedTours");
    if (tmp_tours) {
        bookedTours = JSON.parse(tmp_tours) as Tour[];
        return;
    }
    bookedTours = [];
}

/**
 * An array of Tour objects.
 * This array is created by parsing the JSON data representing the tours.
 */
export let tours: Tour[] = [];

/**
 * An array of Tour objects that have been booked.
 * Initially, this array is empty. As tours are booked, they are added to this array.
 */
export let bookedTours: Tour[] = [];


/**
 * Represents the status of a user in the system.
 */
export enum Status {
    NotLoggedIn,  /* The user is not logged in. */
    User,         /* The user is logged in as a regular user. */
    Guide,        /* The user is logged in as a guide. */
    Admin         /* The user is logged in as an admin. */
}


/**
 * Gets a tour by its ID.
 * 
 * This function iterates over the existing tours and returns the first tour that matches the provided ID.
 * If no tour matches the provided ID, it returns undefined.
 * 
 * @param {number} id - The ID of the tour to retrieve.
 * @returns {Tour | undefined} The tour with the matching ID, or undefined if no tour matches the provided ID.
 */
export const getTourById = (id: number): Tour | undefined => {
    return tours.find(tour => tour.id === id);
}

/**
 * Gets the first available ID for a new tour.
 * 
 * This function iterates over the existing tours and finds the highest ID.
 * It then returns one more than the highest ID, which will be the first available ID for a new tour.
 * If there are no existing tours, it returns 1.
 * 
 * @returns {number} The first available ID for a new tour.
 */
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


/**
 * An array of strings representing the different login statuses a user can have.
 * These statuses correspond to the values in the Status enum.
 */
export const statusStrings = ["NotLoggedIn", "User", "Guide", "Admin"];

/**
 * A writable store that holds the current login status of the user.
 * It is initialized to "NotLoggedIn", which corresponds to Status.NotLoggedIn in the Status enum.
 */
export const loginStatus = writable(statusStrings[Status.NotLoggedIn]);