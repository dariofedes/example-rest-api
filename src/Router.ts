export default interface Router {
    get(pathName: string): void

    listen(): void
}