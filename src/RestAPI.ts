import Router from './Router'

export default class RestAPI {
    router: Router

    constructor(router: Router) {
        this.router = router
    }

    run() {
        this.router.get('countries')

        this.router.listen()
    }
}