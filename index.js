import express from 'express'
import Dotenv from 'dotenv'

Dotenv.config()

const app = express()

const port = process.env.PORT

app.get("/", (_, res) => {
	res.send('Express + Nodemon Server ')
})

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})

export const viteNodeApp = app
