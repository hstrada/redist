import { uuid } from "../../services/utils/uuid"

export class Connection {
    id: string
    name: string
    url: string
    port: number

    constructor(
        name: string,
        url: string,
        port: number) {
        this.id = uuid()
        this.name = name
        this.url = url
        this.port = port
    }
}
