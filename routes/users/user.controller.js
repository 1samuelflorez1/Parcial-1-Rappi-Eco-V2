export class UsersController {

    constructor(repository){
        this.repository = repository
    }

    getAllStores = async (req, res) => { 
        res.send({stores: await this.repository.getAllStores()})
    }
}

