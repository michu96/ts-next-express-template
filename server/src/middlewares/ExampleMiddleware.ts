import { Request, Response, NextFunction } from 'express'

const ExampleMiddleware = {
    verify: (
        req: Request,
        res: Response,
        next: NextFunction
    ): void | Response => {
        if (req.body.message) {
            return next()
        } else {
            return res.status(400).json({ error: 'Message cannot be empty' })
        }
    },
}

export default ExampleMiddleware
