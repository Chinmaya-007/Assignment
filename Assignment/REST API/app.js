const express = require('express')
const userRouter = require('./routers/user')
const port = process.env.PORT
// const seedUser = require('./seed/user')
require('./db/db')

const app = express()
// console.log('Seeding user..............' + seedUser(''))

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})