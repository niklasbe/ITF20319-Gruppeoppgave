import { Account } from './account';

class Guide extends Account {
    
    private price : number;
    private rating : number;
    private description : string;
    private languages : string[];
    private availability : string[];

    constructor(id: number, username: string, password: string, email: string, address: string) {
        super(id, username, password, email, address);
    }

    getPrice(): number {
        return this.price;
    }

    getRating(): number {
        return this.rating;
    }

    getDescription(): string {
        return this.description;
    }

    getLanguages(): string[] {
        return this.languages;
    }

    getAvailability(): string[] {
        return this.availability;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    setRating(rating: number): void {
        this.rating = rating;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setLanguages(languages: string[]): void {
        this.languages = languages;
    }

    setAvailability(availability: string[]): void {
        this.availability = availability;
    }
}