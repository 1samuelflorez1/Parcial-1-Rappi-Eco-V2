export class UsersController {

    constructor(repository) {
        this.repository = repository
    }

    getAllStores = async (req, res) => {
        res.send({ stores: await this.repository.getAllStores() })
    }
    getAllStoreProducts = async (req, res) => {
        const { id } = req.params
        const products = await this.repository.getAllStoreProducts(id)
        res.json(products)
    }
    createNewProduct = async (req, res) => {
        const { store_id, name, price, image_product } = req.body
        const product = await this.repository.createNewProduct(store_id, name, price, image_product)
        res.json(product)
    }
    toggleOpenStore = async (req, res) => {
        const { store_id, is_open } = req.body
        const store = await this.repository.toggleOpenStore(store_id, is_open)
        res.json(store)
    }
    createOrder = async (req, res) => {
        try {
            const { store_id, pay_method, address, status, total, items } = req.body
            const orderId = await this.repository.createOrder(store_id, pay_method, address, status, total, items)
            res.status(201).json({ success: true, orderId })
        } catch (error) {
            console.error(error)
            res.status(500).json({ success: false, message: "Error al crear la orden" })
        }
    }
    getTotalOrders = async (req, res) => {
        res.send({ orders: await this.repository.getTotalOrders() })
    }
    getTotalOrdersDelivery = async (req, res) => {
        res.send({ orders: await this.repository.getTotalOrdersDelivery() })
    }
    getTotalOrdersInTheWay = async (req, res) => {
        res.send({ orders: await this.repository.getTotalOrdersInTheWay() })
    }
    updateOrderOntheWay = async (req, res) => {
        const { order_id, status } = req.body
        const order = await this.repository.updateOrderOntheWay(order_id, status)
        res.json(order)
    }
    updateOrderDelivered = async (req, res) => {
        const { order_id, status } = req.body
        const order = await this.repository.updateOrderDelivered(order_id, status)
        res.json(order)
    }
}

