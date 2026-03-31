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
    createOrder = async (store_id, pay_method, address, status, total, items) => {
        const orderResult = await pool.query(
            "INSERT INTO orders (store_id, pay_method, address, status, total) VALUES ($1, $2, $3, $4, $5) RETURNING id",
            [store_id, pay_method, address, status, total]
        );
        const orderId = orderResult.rows[0].id;

        for (const item of items) {
            await pool.query(
                "INSERT INTO orderproducts (order_id, product_id, unit_price) VALUES ($1, $2, $3)",
                [orderId, item.product_id, item.unit_price]
            );
        }
        return orderId;
    }
    getTotalOrders = async () => {
        const result = await pool.query(`
            SELECT 
                op.id, 
                op.order_id, 
                op.product_id, 
                op.unit_price,
                p.name AS product_name,
                p.image_product AS product_image,
                o.status,
                o.total,
                o.address
            FROM orderproducts op
            JOIN products p ON op.product_id = p.id
            JOIN orders o ON op.order_id = o.id
        `)
        return result.rows
    }
}

