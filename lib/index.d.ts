export interface User {
    firstName: string;
    lastName: string;
    email: string;
    location: string;
    age: Date;
    qualification: string;
}
export declare function generateDummyUsers(count: number): User[];
