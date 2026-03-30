export class UsersController {

    constructor(repository){
        this.repository = repository
    }

    getAllStores = async (req, res) => { 
        res.send({stores: await this.repository.getAllStores()})
    }
    getAllStoreProducts = async (req, res) => { 
        const {id} = req.params
        const products = await this.repository.getAllStoreProducts(id)
        res.json(products)
    }
    createNewProduct = async (req, res) => {
        const {store_id, name, price, image_product} = req.body
        const product = await this.repository.createNewProduct(store_id, name, price, image_product)
        res.json(product)
    }
    toggleOpenStore = async (req, res) => {
        const {store_id, is_open} = req.body
        const store = await this.repository.toggleOpenStore(store_id, is_open)
        res.json(store)
    }
}

