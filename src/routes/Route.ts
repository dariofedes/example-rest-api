import Router from "../infrastructure/Router";

export default interface Route {
    registerRoute(router: Router): void
}