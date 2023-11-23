export class Account {
    private id: number;
    private username: string;
    private password: string;
    private email: string;
    private address: string;
    private geolocation: string = "";

    constructor(id: number, username: string, password: string, email: string, address: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.address = address;
    }

    getId(): number {
        return this.id;
    }

    getUsername(): string {
        return this.username;
    }

    getPassword(): string {
        return this.password;
    }

    getEmail(): string {
        return this.email;
    }

    getAddress(): string {
        return this.address;
    }

    getGeolocation(): string {
        return this.geolocation;
    }

    setId(id: number): void {
        this.id = id;
    }

    setUsername(username: string): void {
        this.username = username;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    setEmail(email: string): void {
        this.email = email;
    }
    
    setAddress(address: string): void {
        this.address = address;
    }

    setGeolocation(geolocation: string): void {
        this.geolocation = geolocation;
    }
}