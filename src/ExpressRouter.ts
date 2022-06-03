import express, { Application as ExpressApplication } from 'express'
import Router from './Router'

export default class ExpressRouter implements Router {
    router: ExpressApplication

    constructor() {
        this.router = express()
    }

    
    listen(): null {
        throw new Error('Method not implemented.');
    }

    get(endpoint: string): null {
        throw new Error('Method not implemented.');
    }
}