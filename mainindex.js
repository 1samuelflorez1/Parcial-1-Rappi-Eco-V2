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

app.use(express.static(path.join(__dirname, "public/front1/dist")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/front1/dist/index.html"))
})

app.listen(PORT, () => {
    console.log("listening on port", PORT)
})