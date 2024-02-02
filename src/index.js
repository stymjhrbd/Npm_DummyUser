import { faker } from "@faker-js/faker";

export function generateDummyUsers(count) {
  const users = [];

  for (let i = 0; i < count; i++) {
    const user = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      isEmailVerified: true || false,
      role: "candidate",
      avatar: faker.image.avatar(),
      phoneNumber: faker.phone.number(),
    };

    users.push(user);
  }

  return users;
}
// module.exports =  generateDummyUsers ;