import { Injectable } from "@angular/core";
import * as io from "socket.io-client"
import { Observable } from "rxjs";

@Injectable()
export class WebSocketClient {

    private socket

    initSocket() {
        this.socket = io('http://localhost:3000')
    }

    onEvent(evento) : Observable<any> {
        let obs = new Observable<any>( obj => {
            this.socket.on(evento, (ret) => {
                obj.next(ret)
            })
        })

        return obs
    }

    disconnect() {
        this.socket.disconnect()
    }
}