# Fake User Generator<br />

This is a simple JavaScript module for generating fake user data using [Faker.js](https://fakerjs.dev/).<br /><br />

## Installation<br />

1. Make sure you have Node.js installed on your machine.<br />
2. Install Faker.js by running: `npm install @faker-js/faker`<br />
3. Include the `generateFakeUsers` function in your project.<br /><br />

## Usage<br />

The `generateFakeUsers` function generates fake user data based on the specified model.<br /><br />

### Function Signature<br />

import { generateFakeUsers } from "npm_package_dummy_user";<br /><br />

const numberOfUsers = 5;<br />
const userFieldsModel = {<br />
firstName: "person.firstName",<br />
lastName: "person.lastName",<br />
email: "internet.email",<br />
avatar: "image.avatar",<br />
address: "location.streetAddress",<br />
};<br /><br />

const generatedUsers = generateFakeUsers(numberOfUsers, userFieldsModel);<br />
console.log(generatedUsers);<br />
