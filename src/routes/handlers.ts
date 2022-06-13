import { Request, Response, NextFunction } from 'express'

function indexHandler(req: Request, res: Response) {
  res.render('index', {title: 'outback', message: 'THIS IS A TEST'})
}

export { indexHandler }
