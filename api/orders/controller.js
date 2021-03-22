const mongoose = require('mongoose')
const Product = require('../products/model')
const Order = require('./model')

export const getorders =  async (req, res, next) => {
    try {
        const orders = await Order.find().populate('productId','name').exec()
        res.send({
          status: true,
          message: 'resource found',
          result: orders
      })
      }catch{
          res.send({
              status: false,
              message: 'resource not found',
              result: {}
          })
      }
}
export const postorders =  async (req, res, next) => {
    try {
        const prodid = req.body.productId
       const product = await Product.findById(prodid)
        if (!product){
            throw ('Invalid product')
          }
            await Order.create({
                _id: new mongoose.Types.ObjectId(),
                productId: prodid,
                quantity: req.body.quantity
            })
            res.send({
                status: true,
                message: 'item created successifuly',
                error:{}
            })
        } catch (err){
             res.send({
                status: false,
                message: 'Failed to create',
                error: err
            })
       }
}
export const getorder = async (req,res, next) => {
    try {
        const id = req.params.id
        const order = await Order.findById(id).populate('productId').exec()
        res.status(200).json({
            status: true,
            message: 'resource found',
            result: order
        })
    } catch {
        res.send({
            status: false,
            message: 'resource not found',
            result: {}
        })
    }
}
export const deleteOrder = async  (req,res, next) => {
    try {
        const id = req.params.id 
        await  Order.remove({_id:id}).exec()
        res.send({
            status: true,
            message: 'item deleted succesifully',
        })
    }catch {
        res.send({
            status: false,
            message: 'resource not found',
        })
    }
}