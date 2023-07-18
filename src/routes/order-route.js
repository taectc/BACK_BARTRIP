const express = require('express')
const paymentController = require('../controllers/payment-controller')
const router = express.Router()
const authenticate = require('./../middlewares/authenticate')


router.post('/checkout', paymentController.checkout)
router.get('/payment', authenticate, paymentController.payment)

router.post('/createOrder', authenticate, paymentController.createOrder)

module.exports = router
