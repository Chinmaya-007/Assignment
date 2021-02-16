const User = require('../models/User')
const Role = require('../middleware/role')

const seedUser = () =>
    async () => {
        const user1 = {
            name: "Test user 1",
            email: "admin@user.com",
            password: "pass@123",
            role: Role.Admin
        }
        const user = new User(user1)
        await user.save()
        console.log('User Saved as Admin')
    }
module.exports = seedUser