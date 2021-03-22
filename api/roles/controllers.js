const mongoose = require('mongoose')
const Role = require('./model')

export const getRoles =  async (req, res, next) => {
    try {
        const roles = await Role.find().exec()
        res.send({
          status: true,
          message: 'resource found',
          result: roles
      })
      }catch{
          res.send({
              status: false,
              message: 'resource not found',
              result: {}
          })
      }
}
export const postRoles =  async (req, res, next) => {
    try {
        await Role.create({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            level: req.body.level
        })
        res.send({
            status: true,
            message: 'Role created successifuly',
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
export const getRole = async (req,res, next) => {
    try {
        const id = req.params.id
        const role = await Role.findById(id).populate('productId').exec()
        res.status(200).json({
            status: true,
            message: 'resource found',
            result: role
        })
    } catch {
        res.send({
            status: false,
            message: 'resource not found',
            result: {}
        })
    }
}
export const deleteRole = async  (req,res, next) => {
    try {
        const id = req.params.id 
        await  Role.remove({_id:id}).exec()
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