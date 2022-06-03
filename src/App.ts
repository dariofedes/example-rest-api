import Router from './Router'

export default class App {
    router: Router

    constructor(router: Router) {
        this.router = router
    }

    run(port: number = 8080) {
        this.router.get('/countries')

        this.router.listen()
    }
}