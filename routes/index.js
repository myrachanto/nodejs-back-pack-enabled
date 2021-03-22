import userRoutes from '../api/users/routes'
import productsRoutes from '../api/products/routes'
import ordersROutes from '../api/orders/routes'
import roleRoutes from '../api/roles/routes'

export default (app) => {
    app.use('/user', userRoutes)
    app.use('/products', productsRoutes)
    app.use('/order', ordersROutes)
    app.use('/role', roleRoutes)
}