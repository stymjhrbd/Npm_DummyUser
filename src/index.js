import { faker } from "@faker-js/faker";

export function generateFakeUsers(count, userFields) {
  const users = [];

  for (let i = 0; i < count; i++) {
    const user = {};

    for (const field in userFields) {
      const [fakerMethod, submethod] = userFields[field].split('.');
      const fakerObject = faker[fakerMethod];

      if (!fakerObject) {
        throw new Error(`Invalid faker method: ${fakerMethod}`);
      }

      if (submethod && typeof fakerObject[submethod] === 'function') {
        user[field] = fakerObject[submethod]();
      } else if (typeof fakerObject === 'function') {
        user[field] = fakerObject();
      } else {
        throw new Error(`Invalid faker method or submethod: ${fakerMethod}.${submethod}`);
      }
    }

    users.push(user);
  }

  return users;
}