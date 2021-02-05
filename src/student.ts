import faker from "faker";

export class Student {
    location: {
        latitude: number;
        longitude: number;
    };  
    lastName: string = '';
    firstName: string = '';
    constructor() {
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        }
    }
       getName() {
           return this.firstName + " " + this.lastName;
       }
}