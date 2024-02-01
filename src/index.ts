import { faker } from "@faker-js/faker";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  age: Date;
  qualification: string;
}

export function generateDummyUsers(count: number): User[] {
  const users: User[] = [];

  for (let i = 0; i < count; i++) {
    const user: User = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      location: faker.location.city(),
      age: faker.date.birthdate({ min: 18, max: 80 }),
      qualification: faker.person.jobType(),
    };

    users.push(user);
  }

  return users;
}
