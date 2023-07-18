const {
    validateRegister,
    validateLogin,
} = require('../validators/auth-validator')
const bcryptService = require('../services/bcrypt-service')
const tokenService = require('../services/token-service')
const createError = require('../utils/create-error')
const { User, UserDrink } = require('../models')

exports.getMe = (req, res, next) => {
    res.status(200).json({ user: req.user })
}

exports.register = async (req, res, next) => {
    try {
        // Validate
        const value = validateRegister(req.body)

        const isUserExist = await User.findOne({
            where: {
                email: value.email,
            },
        })

        if (isUserExist) {
            throw createError('Email address already in use')
        }

        // Hash password
        value.password = await bcryptService.hash(value.password)

        // Insert to users table
        let user
        user = await User.create({
            nickname: value.nickname,
            email: value.email,
            password: value.password,
        })

        // await Promise.all(
        //     Array.from({ length: 6 }, (_, index) =>
        //         UserDrink.create({
        //             userId: user.id,
        //             drinkId: index + 2,
        //         })
        //     )
        // )

        // Sign token and send response
        const accessToken = tokenService.sign({ id: user.id })
        res.status(200).json({ accessToken })
    } catch (err) {
        next(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const value = validateLogin(req.body)
        const user = await User.findOne({
            where: {
                email: value.email,
            },
        })
        if (!user) {
            createError('Please register !!!', 400)
        }
        const isCorrect = await bcryptService.compare(
            value.password,
            user.password
        )
        if (!isCorrect) {
            createError('Wrong passwod !!!', 400)
        }
        const accessToken = tokenService.sign({ id: user.id })
        res.status(200).json({ accessToken })
    } catch (err) {
        next(err)
    }
}

exports.editNameByUserId = async (req, res, next) => {
    try {
        console.log(req.body)
        const { id, nickname } = req.body

        const user = await User.findOne({
            where: {
                id: id,
            },
        })

        if (!user) {
            throw createError('User not found', 404)
        }

        user.nickname = nickname
        await user.save()

        res.status(200).json({ message: 'Nickname updated successfully' })
    } catch (err) {
        next(err)
    }
}
