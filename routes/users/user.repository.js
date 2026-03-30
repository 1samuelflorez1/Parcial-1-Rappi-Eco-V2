import { pool } from "../clients/supabase-db.js"

export class UsersRepository {
    getAllStores = async () => {
        const result = await pool.query("SELECT * FROM stores")

        return result.rows  
    }
    getAllStoreProducts = async (storeId) => {
        const result = await pool.query("SELECT * FROM products WHERE store_id = $1", [storeId])

        return result.rows  
    }
    createNewProduct = async (store_id, name, price, image_product) => {
        const result = await pool.query(
            "INSERT INTO products (store_id, name, price, image_product) VALUES ($1, $2, $3, $4) RETURNING *", 
        [store_id, name, price, image_product])
        return result.rows[0] 
    }
    toggleOpenStore = async (store_id, is_open) => {
        const result = await pool.query("UPDATE stores SET is_open = $2 WHERE id = $1 RETURNING *", [store_id, is_open])
        return result.rows[0]
    }
}

