import Router from "./Router";

export default interface Route {
    registerRoute(router: Router): void
}