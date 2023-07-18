const express = require('express')
const productController = require('../controllers/product-controller')
const upload = require('../middlewares/upload')
const router = express.Router()
const authenticate = require('./../middlewares/authenticate')

// Add Product
router.post('/avatar', upload.single('image'), productController.AddAvatar)
router.post('/drink', upload.single('image'), productController.AddDrink)
router.post('/hat', upload.single('image'), productController.AddHat)

// Edit Product
router.patch(
    '/avatar/:id',
    upload.single('image'),
    productController.EditAvatar
)
router.patch('/hat/:id', upload.single('image'), productController.EditHat)
router.patch('/drink/:id', upload.single('image'), productController.EditDrink)

// Delete Product
router.delete('/avatar/:id', productController.DeleteAvatar)
router.delete('/hat/:id', productController.DeleteHat)
router.delete('/drink/:id', productController.DeleteDrink)

// Get All Product
router.get('/avatar', productController.GetAllAvatars)
router.get('/hat', productController.GetAllHats)
router.get('/drink', productController.GetAllDrinks)

// GET Product By ProductId
router.get('/avatar/:id', productController.GetAvatarById)
router.get('/hat/:id', productController.GetHatById)
router.get('/drink/:id', productController.GetDrinkById)

// User
router.post('/hatUser', authenticate, productController.AddOrderHat)
router.post('/drinkUser', authenticate, productController.AddOrderDrink)
router.post('/avatarUser', authenticate, productController.AddOrderAvatar)

router.get('/meAvatar', authenticate, productController.GetFullAvatarByUserId)

router.post('/meAvatar', productController.GetFullAvatarByUserOnlineId)

// GET Product By UserId
router.get('/userDrink', authenticate, productController.GetAllDrinkByUserId)
router.get('/userHat', authenticate, productController.GetAllHatByUserId)
router.get('/userAvatar', authenticate, productController.GetAllAvatarByUserId)

router.patch(
    '/userAvatar',
    authenticate,
    productController.UpdateAvatarByUserId
)

module.exports = router
