export default interface Router {
    get(endpoint: string): void

    listen(): void
}