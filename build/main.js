require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/middlewares/admin.js":
/*!**********************************!*\
  !*** ./api/middlewares/admin.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    if (decoded.role != 'admin') {
      throw err;
    }

    next();
  } catch (err) {
    res.send({
      status: false,
      message: "authorization failed"
    });
  }
};

/***/ }),

/***/ "./api/middlewares/auth-check.js":
/*!***************************************!*\
  !*** ./api/middlewares/auth-check.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.send({
      status: true,
      message: "authorization failed"
    });
  }
};

/***/ }),

/***/ "./api/middlewares/level3.js":
/*!***********************************!*\
  !*** ./api/middlewares/level3.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    console.log(decoded);

    if (decoded.level != 'level3') {
      throw err;
    }

    next();
  } catch (err) {
    res.send({
      status: false,
      message: "not authorised to access this resource!"
    });
  }
};

/***/ }),

/***/ "./api/orders/controller.js":
/*!**********************************!*\
  !*** ./api/orders/controller.js ***!
  \**********************************/
/*! exports provided: getorders, postorders, getorder, deleteOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getorders", function() { return getorders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postorders", function() { return postorders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getorder", function() { return getorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOrder", function() { return deleteOrder; });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const Product = __webpack_require__(/*! ../products/model */ "./api/products/model.js");

const Order = __webpack_require__(/*! ./model */ "./api/orders/model.js");

const getorders = async (req, res, next) => {
  try {
    const orders = await Order.find().populate('productId', 'name').exec();
    res.send({
      status: true,
      message: 'resource found',
      result: orders
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found',
      result: {}
    });
  }
};
const postorders = async (req, res, next) => {
  try {
    const prodid = req.body.productId;
    const product = await Product.findById(prodid);

    if (!product) {
      throw 'Invalid product';
    }

    await Order.create({
      _id: new mongoose.Types.ObjectId(),
      productId: prodid,
      quantity: req.body.quantity
    });
    res.send({
      status: true,
      message: 'item created successifuly',
      error: {}
    });
  } catch (err) {
    res.send({
      status: false,
      message: 'Failed to create',
      error: err
    });
  }
};
const getorder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const order = await Order.findById(id).populate('productId').exec();
    res.status(200).json({
      status: true,
      message: 'resource found',
      result: order
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found',
      result: {}
    });
  }
};
const deleteOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Order.remove({
      _id: id
    }).exec();
    res.send({
      status: true,
      message: 'item deleted succesifully'
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found'
    });
  }
};

/***/ }),

/***/ "./api/orders/model.js":
/*!*****************************!*\
  !*** ./api/orders/model.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  }
});
module.exports = mongoose.model('Order', orderSchema);

/***/ }),

/***/ "./api/orders/routes.js":
/*!******************************!*\
  !*** ./api/orders/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./api/orders/controller.js");
const express = __webpack_require__(/*! express */ "express");

const router = express.Router();

const auth = __webpack_require__(/*! ../middlewares/auth-check */ "./api/middlewares/auth-check.js");

const admin = __webpack_require__(/*! ../middlewares/admin */ "./api/middlewares/admin.js");

const level3 = __webpack_require__(/*! ../middlewares/level3 */ "./api/middlewares/level3.js"); //import controller


 //routes reources in regards to everything to do with orders -crud

router.get('/', auth, admin, _controller__WEBPACK_IMPORTED_MODULE_0__["getorders"]);
router.post('/', auth, _controller__WEBPACK_IMPORTED_MODULE_0__["postorders"]);
router.get('/:id', auth, _controller__WEBPACK_IMPORTED_MODULE_0__["getorder"]);
router.delete('/:id', auth, admin, level3, _controller__WEBPACK_IMPORTED_MODULE_0__["deleteOrder"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./api/products/controllers.js":
/*!*************************************!*\
  !*** ./api/products/controllers.js ***!
  \*************************************/
/*! exports provided: getproducts, postProducts, getProduct, updateProduct, deleteProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getproducts", function() { return getproducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postProducts", function() { return postProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProduct", function() { return updateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose"); //import the product model schema


const Product = __webpack_require__(/*! ./model */ "./api/products/model.js");

const getproducts = async (req, res, next) => {
  try {
    const products = await Product.find().select("name price _id picture").exec();
    res.send({
      status: true,
      message: 'resource found',
      result: products
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found',
      result: {}
    });
  }
};
const postProducts = async (req, res, next) => {
  try {
    console.log(req.file);
    await Product.create({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      price: req.body.price,
      picture: req.file.path
    });
    res.send({
      status: true,
      message: 'item created successifuly',
      error: {}
    });
  } catch (err) {
    res.send({
      status: false,
      message: 'Failed to create',
      error: err
    });
  }
};
const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id).exec();
    res.send({
      status: true,
      message: 'resource found',
      result: product
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found',
      result: {}
    });
  }
};
const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedproduct = {};

    for (let [k, v] of Object.entries(req.body)) {
      updatedproduct[k] = v;
    }

    await Product.updateOne({
      _id: id
    }, {
      $set: updatedproduct
    }).exec();
    res.send({
      status: true,
      message: 'resource updated'
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found'
    });
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Product.remove({
      _id: id
    }).exec();
    res.send({
      status: true,
      message: 'item deleted succesifully'
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found'
    });
  }
};

/***/ }),

/***/ "./api/products/model.js":
/*!*******************************!*\
  !*** ./api/products/model.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  picture: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Product', productSchema);

/***/ }),

/***/ "./api/products/routes.js":
/*!********************************!*\
  !*** ./api/products/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers */ "./api/products/controllers.js");
const express = __webpack_require__(/*! express */ "express");

const multer = __webpack_require__(/*! multer */ "multer");

const auth = __webpack_require__(/*! ../middlewares/auth-check */ "./api/middlewares/auth-check.js");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limit: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
}); //routes reources in regards to everything to do with products -crud

router.get('/', _controllers__WEBPACK_IMPORTED_MODULE_0__["getproducts"]);
router.post('/', auth, upload.single('image'), _controllers__WEBPACK_IMPORTED_MODULE_0__["postProducts"]);
router.get('/:id', _controllers__WEBPACK_IMPORTED_MODULE_0__["getProduct"]);
router.patch('/:id', auth, _controllers__WEBPACK_IMPORTED_MODULE_0__["updateProduct"]);
router.delete('/:id', auth, _controllers__WEBPACK_IMPORTED_MODULE_0__["deleteProduct"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./api/roles/controllers.js":
/*!**********************************!*\
  !*** ./api/roles/controllers.js ***!
  \**********************************/
/*! exports provided: getRoles, postRoles, getRole, deleteRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoles", function() { return getRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRoles", function() { return postRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return getRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRole", function() { return deleteRole; });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const Role = __webpack_require__(/*! ./model */ "./api/roles/model.js");

const getRoles = async (req, res, next) => {
  try {
    const roles = await Role.find().exec();
    res.send({
      status: true,
      message: 'resource found',
      result: roles
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found',
      result: {}
    });
  }
};
const postRoles = async (req, res, next) => {
  try {
    await Role.create({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      level: req.body.level
    });
    res.send({
      status: true,
      message: 'Role created successifuly',
      error: {}
    });
  } catch (err) {
    res.send({
      status: false,
      message: 'Failed to create',
      error: err
    });
  }
};
const getRole = async (req, res, next) => {
  try {
    const id = req.params.id;
    const role = await Role.findById(id).populate('productId').exec();
    res.status(200).json({
      status: true,
      message: 'resource found',
      result: role
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found',
      result: {}
    });
  }
};
const deleteRole = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Role.remove({
      _id: id
    }).exec();
    res.send({
      status: true,
      message: 'item deleted succesifully'
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found'
    });
  }
};

/***/ }),

/***/ "./api/roles/model.js":
/*!****************************!*\
  !*** ./api/roles/model.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const roleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  level1: {
    type: String,
    default: 'level1'
  },
  level2: {
    type: String,
    default: 'level2'
  },
  level3: {
    type: String,
    default: 'level3'
  }
});
module.exports = mongoose.model('Role', roleSchema);

/***/ }),

/***/ "./api/roles/routes.js":
/*!*****************************!*\
  !*** ./api/roles/routes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers */ "./api/roles/controllers.js");
const express = __webpack_require__(/*! express */ "express");

const router = express.Router();

const auth = __webpack_require__(/*! ../middlewares/auth-check */ "./api/middlewares/auth-check.js");

const admin = __webpack_require__(/*! ../middlewares/admin */ "./api/middlewares/admin.js");

const level3 = __webpack_require__(/*! ../middlewares/level3 */ "./api/middlewares/level3.js"); //import controller


 //routes reources in regards to everything to do with orders -crud

router.get('/', auth, admin, level3, _controllers__WEBPACK_IMPORTED_MODULE_0__["getRoles"]);
router.post('/', auth, admin, level3, _controllers__WEBPACK_IMPORTED_MODULE_0__["postRoles"]);
router.get('/:id', auth, admin, level3, _controllers__WEBPACK_IMPORTED_MODULE_0__["getRole"]);
router.delete('/:id', auth, admin, level3, _controllers__WEBPACK_IMPORTED_MODULE_0__["deleteRole"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./api/users/controller.js":
/*!*********************************!*\
  !*** ./api/users/controller.js ***!
  \*********************************/
/*! exports provided: getusers, register, login, updateUsers, deleteUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getusers", function() { return getusers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUsers", function() { return updateUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUsers", function() { return deleteUsers; });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken"); //import model


const User = __webpack_require__(/*! ./model */ "./api/users/model.js");

const getusers = async (req, res, next) => {
  try {
    const users = await User.find().exec();
    res.send({
      status: true,
      message: 'resource found',
      result: users
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found',
      result: []
    });
  }
};
const register = async (req, res, next) => {
  try {
    pass = req.body.password;
    email = req.body.email;
    e = validateEmail(email);

    if (e != true) {
      throw 'that email is wrongly formated';
    }

    const user = await userexist(email);

    if (user) {
      throw 'that email email eixst in the system';
    }

    const hash = await encrypt(pass);

    if (hash == "") {
      throw "something went wrong";
    }

    await User.create({
      _id: new mongoose.Types.ObjectId(),
      email: email,
      password: hash
    });
    res.send({
      status: true,
      message: 'user created successifuly',
      error: {}
    });
  } catch (err) {
    res.send({
      status: false,
      message: 'Failed to create',
      error: err
    });
  }
};
const login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userexist(email);

    if (!user) {
      throw 'that email and password combo is wrong';
    }

    console.log(user.password);
    const result = await compare(password, user.password);

    if (result != true) {
      throw 'that email and password combo is wrong';
    }

    const token = jwt.sign({
      email: email,
      role: user.role,
      level: user.level,
      userid: user._id
    }, process.env.JWT_KEY, {
      expiresIn: "1h"
    });
    res.send({
      status: true,
      message: 'welcome ' + user.email,
      token: token
    });
  } catch (err) {
    res.send({
      status: false,
      message: 'something went wrong logging in',
      error: err
    });
  }
};
const updateUsers = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateduser = {};

    for (let [k, v] of Object.entries(req.body)) {
      updateduser[k] = v;
    }

    await User.updateOne({
      _id: id
    }, {
      $set: updateduser
    }).exec();
    res.send({
      status: true,
      message: 'resource updated'
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found'
    });
  }
};
const deleteUsers = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.remove({
      _id: id
    }).exec();
    res.status(200).json({
      status: true,
      message: 'resource remove successfully'
    });
  } catch {
    res.send({
      status: false,
      message: 'resource not found'
    });
  }
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

async function userexist(email) {
  try {
    const user = await User.findOne({
      email: email
    }).exec();
    return user;
  } catch (err) {
    return err;
  }
}

async function encrypt(password) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10); // Hash password

    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(error);
  } // Return null if error


  return null;
}

async function compare(pass1, pass2) {
  try {
    console.log(pass1, pass2); // Generate a salt

    return await bcrypt.compare(pass1, pass2);
  } catch (error) {
    console.log(error);
  } // Return null if error


  return null;
}

/***/ }),

/***/ "./api/users/model.js":
/*!****************************!*\
  !*** ./api/users/model.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'basic'
  },
  level: {
    type: String,
    default: 'level1'
  }
});
module.exports = mongoose.model('User', userSchema);

/***/ }),

/***/ "./api/users/routes.js":
/*!*****************************!*\
  !*** ./api/users/routes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./api/users/controller.js");
const express = __webpack_require__(/*! express */ "express");

const router = express.Router();

const auth = __webpack_require__(/*! ../middlewares/auth-check */ "./api/middlewares/auth-check.js");

const level3 = __webpack_require__(/*! ../middlewares/level3 */ "./api/middlewares/level3.js");

const admin = __webpack_require__(/*! ../middlewares/admin */ "./api/middlewares/admin.js"); //import user controllers


 //routes reources in regards to everything to do with orders -crud

router.get('/', _controller__WEBPACK_IMPORTED_MODULE_0__["getusers"]);
router.post('/register', _controller__WEBPACK_IMPORTED_MODULE_0__["register"]);
router.post('/login', _controller__WEBPACK_IMPORTED_MODULE_0__["login"]);
router.patch('/:id', auth, level3, _controller__WEBPACK_IMPORTED_MODULE_0__["updateUsers"]);
router.delete('/:id', auth, admin, level3, _controller__WEBPACK_IMPORTED_MODULE_0__["deleteUsers"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/index */ "./routes/index.js");
const express = __webpack_require__(/*! express */ "express");

const morgan = __webpack_require__(/*! morgan */ "morgan");

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");


const app = express(); //database connection

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("succesifully connected to mognodb");
}).catch(err => {
  console.log("well check your mongodb coz something went wrong it did not connect!");
}); //logg request with morgan

app.use(morgan('dev')); //provide uploads folder to be available to the frontend

app.use('/uploads', express.static('uploads')); //parse data from forms used to be body-parser but now its depricated

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json()); //configure cors to accpt cross origin site requests

app.use((req, res, next) => {
  res.header('Access-control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
}); //hook the import routes to the app for naviagation

Object(_routes_index__WEBPACK_IMPORTED_MODULE_0__["default"])(app); //this middleware captures errors preciselly not found resources

app.use((req, res, next) => {
  const error = new Error('resource not found');
  error.status = 404;
  next(error);
}); //this middleware capture others errors most probably 500 server and db related errors

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_users_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/users/routes */ "./api/users/routes.js");
/* harmony import */ var _api_products_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/products/routes */ "./api/products/routes.js");
/* harmony import */ var _api_orders_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/orders/routes */ "./api/orders/routes.js");
/* harmony import */ var _api_roles_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/roles/routes */ "./api/roles/routes.js");




/* harmony default export */ __webpack_exports__["default"] = (app => {
  app.use('/user', _api_users_routes__WEBPACK_IMPORTED_MODULE_0__["default"]);
  app.use('/products', _api_products_routes__WEBPACK_IMPORTED_MODULE_1__["default"]);
  app.use('/order', _api_orders_routes__WEBPACK_IMPORTED_MODULE_2__["default"]);
  app.use('/role', _api_roles_routes__WEBPACK_IMPORTED_MODULE_3__["default"]);
});

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app.js");
const http = __webpack_require__(/*! http */ "http");


const port = process.env.PORT || 4500;
const server = http.createServer(_app__WEBPACK_IMPORTED_MODULE_0__["default"]);
server.listen(port);

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ })

/******/ });
//# sourceMappingURL=main.map