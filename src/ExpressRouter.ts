import express, { Application as ExpressApplication } from 'express'
import Router from './Router'

export default class ExpressRouter implements Router {
    router: ExpressApplication
    port: number

    constructor(router: ExpressApplication, port: number = 8080) {
        this.router = router
        this.port = port
    }
    
    listen(): void {
        this.router.listen(this.port)
    }

    get(pathName: string): void {
        this.router.get(`/${pathName}`)
    }
}