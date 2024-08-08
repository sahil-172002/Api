const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

app.post("/user", async (req, res) => {
    const randomEmojis = ["😊", "😁", "😎"]
    const data = await req.body
    setTimeout(() => {
        const e = randomEmojis[Math.floor(Math.random() * randomEmojis.length)]
        res.json({ "msg": `Hello, ${data.name} ${e}` })
    }, 2000)

})


app.listen(3000, () => {
    console.log("server started")
})