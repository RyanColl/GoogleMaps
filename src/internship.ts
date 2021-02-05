import faker from "faker";

export class Internship {
    location: {
        latitude: number;
        longitude: number;
    }; 
    internName: string = '';
    constructor() {
        this.internName = faker.name.jobDescriptor()
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        }
    }
}
