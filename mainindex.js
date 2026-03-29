import express from "express"
import router from "./routes/users/user.router.js"

const app = express()
const PORT = 7070

const __dirname = import.meta.dirname

app.use(express.json()) 
app.use("/seleccionuser", router)

// Ruta raíz agregada
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/front1/dist/index.html"))
})

app.listen(PORT, () => {
    console.log("listening on port", PORT)
})