const express = require('express')
const app = express()
// This is your test secret API key.
const stripe = require('stripe')(
    'sk_test_51NNG0pKltfnBEaa8NUY4l1oLR3TogtLrxCLrJmAw8WjIG4HhWhEzXWs8hwwKoRbtr7zMKodiTkaPMCkNgOVtcVmH00NAMTEsgE'
)

app.use(express.static('public'))
app.use(express.json())

const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    //   ใส่สินค้าในนี้ 1400 คือ mock
    return 1400
}

app.post('/payment', async (req, res) => {
    const { items } = req.body
    console.log(items)

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: 'thb',
        automatic_payment_methods: {
            enabled: true,
        },
    })

    res.send({
        clientSecret: paymentIntent.client_secret,
    })
})

app.listen(8080, () => console.log('Node server listening on port 8080!'))
