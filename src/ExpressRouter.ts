import express, { Application as ExpressApplication } from 'express'
import Router from './Router'

export default class ExpressRouter implements Router {
    router: ExpressApplication

    constructor() {
        this.router = express()
    }

    get(endpoint: string): null {
        throw new Error('Method not implemented.');
    }
}