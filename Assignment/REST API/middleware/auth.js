const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = (role) => async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, process.env.JWT_KEY)
    try {
        const user = await User.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error('Not authorized to access this resource')
        }
        if (role === user.role) {
            req.user = user
            req.token = token
            next()
        } else {
            throw new Error("You don't have enough rights to perform this operation!")
        }


    } catch (error) {
        res.status(401).send({ error })
    }

}
module.exports = auth