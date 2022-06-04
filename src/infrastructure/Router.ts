export default interface Router {
    get(pathName: string, callback: Function): void

    listen(): void
}