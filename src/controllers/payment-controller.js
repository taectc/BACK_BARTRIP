const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(STRIPE_SECRET_KEY)
const { Avatar, Drink, Hat, UserHat, UserAvatar, UserDrink, Order, Payment } = require('../models')

exports.checkout = async (req, res, next) => {
    try {
        console.log('--------------------', req.body)
        const data = await stripe.checkout.sessions.create({
            success_url:
                'http://localhost:5173/thank?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:5173/',
            locale: 'th',
            currency: 'THB',
            // customer: ,
            line_items: [{ price: req.body.apiId, quantity: 1 }],
            mode: 'payment',
        })
    
        res.json(data)
    } catch (err) {
        next(err)
    }
}

exports.payment = async (req, res, next) => {
    try {
        
        const id = req.user.id
        const data = req.query
        const response = {}
        // console.log('payment :', data)
        const session = await stripe.checkout.sessions.retrieve(
            req.query.session_id
        )
        console.log(session.metadata.drinkId)
          console.log("________1", session);
        if (session) {
            response.session = session
        }
        // console.log(response)
        //   await Payment.create({
        //     id: session.id,
        //     userId: user.id,
        //   });
        //   console.log("_______aa", req.query);



        const { customer_details, payment_status } = response.session
        console.log(customer_details)
        const { email } = customer_details

        const createPayment = await Payment.create({
            emailUser: payment_status,
            paymentStatus: email
        })

        const lastOrder = await Order.findOne({
            order: [['createdAt', 'DESC']] // เรียงลำดับโดยใช้ฟิลด์ createdAt ในลำดับมากไปน้อย (DESC)
          });

          
          const updatedOrder = await Order.update(
            { paymentId: createPayment.id },
            { where: { id: lastOrder.dataValues.id } }
          );
          
if(lastOrder.dataValues.drinkId){ const createUserDrink = await UserDrink.create({
    drinkId: lastOrder.dataValues.drinkId,
    userId: id
})}

if(lastOrder.dataValues.hatId){ const createUserHat = await UserHat.create({
    hatId: lastOrder.dataValues.hatId,
    userId: id
})}

if(lastOrder.dataValues.avatarId){ const createUserAvatar = await UserAvatar.create({
    avatarId: lastOrder.dataValues.avatarId,
    userId: id
})}
       
       

        res.json({
            message: 'success',
         
        })
    } catch (err) {
        next(err)
    }
}


exports.createOrder = async (req, res, next) => {
    try {
       const drinkId = req.body.drinkId
       const hatId = req.body.hatId
       const avatarId = req.body.avatarId
   
       const id = req.user.id

       if(drinkId){
        const createOrder = await Order.create({
        userId: id,
        drinkId: drinkId
    })}

    if(hatId){
        const createOrder = await Order.create({
        userId: id,
       hatId:hatId
    })}

    if(avatarId){
        const createOrder = await Order.create({
        userId: id,
        avatarId: avatarId
    })}
        
      
    } catch (err) {
        next(err)
    }
}



// exports.payment2 = async (req, res, next) => {
//     const { hatId, drinkId, avatarId } = req.body;
//     const data = req.query;
//     const response = {};

//     const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
//     if (session) {
//         response.session = session;
//     }
        
//     const { customer_details, payment_status } = response.session;
//     const { email } = customer_details;

//     Payment.create({
//         emailUser: payment_status,
//         paymentStatus: email
//     })

//     Order.create({
//         paymentId: 2,
//         userId: 2,
//         drinkId: 2 || null
//     });
   
   
//         if (Payment.paymentStatus == "paid") {
//             return UserDrink.create({
//                 drinkId: 2,
//                 userId: 2
//             });
//         } else {
//             console.log("จนก็ไม่ต้องซื้อ");
//         }
    

// exports.payment2 = async (req, res, next) => {
//     const {hatId, drinkId, avatarId} = req.body
//         // const user = req.user
//         const data = req.query
//         const response = {}
        

//         const session = await stripe.checkout.sessions.retrieve(req.query.session_id)
//         if (session) {response.session = session}
       
        
//         const { customer_details, payment_status } = response.session
        
//         const { email } = customer_details

//         Payment.create({
//             emailUser: payment_status,
//             paymentStatus: email
//         }).then( rs => {
//             console.log(rs.id,"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
//             Order.create({
//                 paymentId: 2,
//                 userId: 2,
              
//                 drinkId: 2 || null,
            
//             })
//         }).then(() => {
//             if (Payment.paymentStatus == "paid") {
//                 UserDrink.create({
//                     drinkId:2,
//                     userId: 2
//                 })
//             } else { console.log("จนก็ไม่ต้องซื้อ") }
//         }).then( rs => {
//             res.json(rs)
//         }).catch(next)

        
// }
