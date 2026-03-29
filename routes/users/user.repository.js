import { pool } from "../clients/supabase-db.js"

export class UsersRepository {
    getAllStores = async () => {
        const result = await pool.query("SELECT * FROM stores")

        return result.rows  
    }
}

