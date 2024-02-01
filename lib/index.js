"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDummyUsers = void 0;
var faker_1 = require("@faker-js/faker");
function generateDummyUsers(count) {
    var users = [];
    for (var i = 0; i < count; i++) {
        var user = {
            firstName: faker_1.faker.person.firstName(),
            lastName: faker_1.faker.person.lastName(),
            email: faker_1.faker.internet.email(),
            location: faker_1.faker.location.city(),
            age: faker_1.faker.date.birthdate({ min: 18, max: 80 }),
            qualification: faker_1.faker.person.jobType(),
        };
        users.push(user);
    }
    return users;
}
exports.generateDummyUsers = generateDummyUsers;
