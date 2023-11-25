import { writable } from "svelte/store";

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

export const loginStatus = writable("");

export enum Status {
    NotLoggedIn,
    User,
    Guide,
    Admin
}

export const statusStrings = ["NotLoggedIn", "User", "Guide", "Admin"];


// create a few tours
export const tours: Tour[] = [
    {
        id: 0,
        date: "2020-01-01",
        time: "12:00",
        location: "Sarpsborg 08 stadion",
        title: "En tur på stadion",
        description: "Denne turen tar deg med på en tur koselig tur på stadion. Her får du se alt fra garderobene til VIP-rommet.",
        price: 200,
        spots: 10,
        spotsLeft: 10,
        guide: "Ola Nordmann"
    },
    {
        id: 1,
        date: "2021-01-01",
        time: "12:00",
        location: "New York",
        title: "A tour of New York",
        description: "A tour of New York",
        price: 100,
        spots: 10,
        spotsLeft: 5,
        guide: "John Doe"
    },
    {
        id: 2,
        date: "2022-01-01",
        time: "12:00",
        location: "New York",
        title: "A tour of New York",
        description: "A tour of New York",
        price: 100,
        spots: 10,
        spotsLeft: 2,
        guide: "John Doe"
    },
    {
        id: 3,
        date: "2023-01-01",
        time: "12:00",
        location: "New York",
        title: "A tour of New York",
        description: "A tour of New York",
        price: 100,
        spots: 10,
        spotsLeft: 2,
        guide: "John Doe"
    },
    {
        id: 4,
        date: "2024-01-01",
        time: "12:00",
        location: "New York",
        title: "A tour of New York",
        description: "A tour of New York",
        price: 100,
        spots: 10,
        spotsLeft: 2,
        guide: "John Doe"
    },
]
