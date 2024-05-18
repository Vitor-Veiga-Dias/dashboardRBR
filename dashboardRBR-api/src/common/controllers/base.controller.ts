import express from 'express';

export class BaseController {
  protected app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
    this.initializeRoutes();
  }

  protected initializeRoutes() {}
}
