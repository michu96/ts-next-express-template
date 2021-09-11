import { Request, Response } from 'express'
import { Example } from '../entities/Example'

const ExampleController = {
    getAll: async (req: Request, res: Response): Promise<Response> => {
        try {
            const examples = await Example.find()
            return res.json(examples)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'Server error' })
        }
    },

    create: async (req: Request, res: Response): Promise<Response> => {
        const example = new Example()
        example.message = req.body.message
        try {
            await example.save()
            return res.sendStatus(201)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'Server error' })
        }
    },

    remove: async (req: Request, res: Response): Promise<Response> => {
        try {
            const example = await Example.findOne(req.params.id)
            if (example) {
                example.remove()
                return res.sendStatus(204)
            }
            return res.sendStatus(404)
        } catch (err) {
            console.log(err)
            return res.sendStatus(500)
        }
    },
}

export default ExampleController
