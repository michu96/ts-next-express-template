import express from 'express'
import { createConnection } from 'typeorm'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes'

const app = express()

;(async function () {
    app.use(cors())
    app.use(morgan('dev'))

    app.use(express.json())

    app.use('/api', router)

    await createConnection()

    const port = process.env.PORT || 5000
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`)
    })
})()

// main()
