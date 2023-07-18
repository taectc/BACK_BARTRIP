const createError = require('../utils/create-error')
const tokenService = require('../services/token-service')
const { User } = require('../models')

module.exports = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization
        // console.log(authorization)
        if (!authorization || !authorization.startsWith('Bearer ')) {
            createError('unauthorized', 401)
        }

        const token = authorization.split(' ')[1]
        if (!token) {
            createError('unauthorized', 401)
        }

        const payload = tokenService.verify(token)
        const user = await User.findByPk(payload.id)
        if (!user) {
            createError('unauthorized', 401)
        }

        req.user = user
        next()
    } catch (err) {
        next(err)
    }
}
