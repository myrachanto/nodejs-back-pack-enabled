const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth-check')
const admin = require('../middlewares/admin')
const level3 = require('../middlewares/level3')
//import controller
import * as OrdersController from './controller'

//routes reources in regards to everything to do with orders -crud
router.get('/', auth, admin, OrdersController.getorders)

router.post('/', auth, OrdersController.postorders)
router.get('/:id', auth, OrdersController.getorder)

router.delete('/:id', auth,admin,level3, OrdersController.deleteOrder)
export default router