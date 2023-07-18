const jwt = require('jsonwebtoken')
const axios = require('axios')

exports.sign = (payload) =>
    jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE_IN,
    })

exports.verify = (token) => jwt.verify(token, process.env.JWT_SECRET_KEY)

exports.verifyGoogle = async (token) => {
    console.log('Verify google..')
    const res = await axios.get(
        'https://oauth2.googleapis.com/tokeninfo?id_token=' + token,
        {
            validateStatus: function (status) {
                return status < 500
            },
        }
    )
    return !!res.data.iss
}
