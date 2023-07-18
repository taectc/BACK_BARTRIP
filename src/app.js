require('dotenv').config()
const express = require('.pnpm/express@4.18.2/node_modules/express')
const cors = require('.pnpm/cors@2.8.5/node_modules/cors')
const morgan = require('.pnpm/morgan@1.10.0/node_modules/morgan')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const http = require('http')

const authRoute = require('./routes/authRoute')
const productRoute = require('./routes/product-route')
const orderRoute = require('./routes/order-route')

const notFoundMiddleware = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')

const app = express()
const server = http.createServer(app)

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('combined'))
}

// app.use(
//     rateLimit({
//         windowMs: 1000 * 60 * 15,
//         max: 1000,
//         message: { message: 'too many request' },
//     })
// )
app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/auth', authRoute)
app.use('/product', productRoute)
app.use('/order', orderRoute)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 8000

// app.listen(port, () => console.log('server running in port ' + port))
module.exports = server
