export default interface Router {
    get(endpoint: string): null

    listen(): null
}