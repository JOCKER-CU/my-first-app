import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ["./server.component.css"]
})
export class ServerComponent {
    detail = false;
    log = [];
    showDetail() {
        this.detail = this.detail;
        this.log.push(this.log.length + 1 +" "+ new Date());
    }
    serverId: number = 50;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() < 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }
    getColor() {
        return this.serverStatus == 'online' ? 'green' : 'red';
    }
}