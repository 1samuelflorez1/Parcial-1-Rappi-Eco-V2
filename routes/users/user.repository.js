import { pool } from "../clients/supabase-db.js"

export class UsersRepository {
    getAllStores = async () => {
        const result = await pool.query("SELECT * FROM stores")

        return result.rows  
    }
    getAllStoreProducts = async () => {
        const result = await pool.query("SELECT * FROM products WHERE store_id = $1", [storeId])

        return result.rows  
    }
}

