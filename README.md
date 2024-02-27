# Fake User Generator

This is a simple JavaScript module for generating fake user data using [Faker.js](https://fakerjs.dev/).

## Installation

1. Make sure you have Node.js installed on your machine.
2. Install package by running: `npm install mg_faker`
3. Include the `generateFakeUsers` function in your project.

## Usage

The `generateFakeUsers` function generates fake user data based on the specified model.

### Function Signature

```javascript
import { generateFakeUsers } from "npm_package_dummy_user";

const numberOfUsers = 5;
const userFieldsModel = {
  firstName: "person.firstName",
  lastName: "person.lastName",
  email: "internet.email",
  avatar: "image.avatar",
  address: "location.streetAddress",
};

const generatedUsers = generateFakeUsers(numberOfUsers, userFieldsModel);
console.log(generatedUsers);
```
