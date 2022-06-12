import { Request, Response, NextFunction } from 'express'

export class Router {
  public index(req: Request, res: Response) {
    res.render('index', {title: 'outback', message: 'THIS IS A TEST'})
  }
}

