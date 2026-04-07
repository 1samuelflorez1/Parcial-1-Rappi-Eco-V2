import express from "express"
import router from "./routes/users/user.router.js"
import path from "path"
import cors from "cors"

const app = express()
const PORT = 7070

app.use(cors())
const __dirname = import.meta.dirname

app.use(express.json()) 
app.use("/seleccionuser", router)



app.listen(PORT, () => {
    console.log("listening on port", PORT)
})