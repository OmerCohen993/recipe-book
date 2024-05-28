export interface Passenger {
    passengerId: number;
    name: string;
    year: number;
    passengerRole: Role;
}

export interface Role {
    roleid: number;
    roleValue: string;
}

export interface PassengerNew {
    passengerId: number;
    name: string;
    year: number;
}

