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
}

