import Router from './Router'
import Route from '../routes/Route'

export default class RestAPI {
    router: Router
    routes?: Route[]
    
    constructor(router: Router, routes?: Route[]) {
        this.router = router
        this.routes = routes
    }

    run() {
        this.routes?.forEach(route => route.registerRoute(this.router))
        this.router.listen()
    }
}