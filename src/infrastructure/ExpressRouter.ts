import {
    Application as ExpressApplication,
    Handler as ExpressHandler
} from 'express'
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

    get(path: string, callback: ExpressHandler): void {
        this.router.get(path, callback)
    }
}