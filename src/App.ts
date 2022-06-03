import { Application as ExpressApplication } from 'express'

export default class App {
    router: ExpressApplication

    constructor(router: ExpressApplication) {
        this.router = router
    }

    run(port: number = 8080) {
        this.router.get('/countries')
    }

}