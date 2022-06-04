import express, { Application as ExpressApplication } from 'express'
import Router from './Router'

export default class ExpressRouter implements Router {
    router: ExpressApplication

    constructor(router: ExpressApplication) {
        this.router = router
    }

    
    listen(): void {
        throw new Error('Method not implemented.');
    }

    get(pathName: string): void {
        this.router.get(`/${pathName}`)
    }
}