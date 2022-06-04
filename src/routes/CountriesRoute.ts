import Route from "./Route";
import Router from "../infrastructure/Router";
import { Request, Response } from 'express'

export default class CountriesRoute implements Route {
    registerRoute(router: Router): void {
        throw new Error("Method not implemented.");
    }
}
