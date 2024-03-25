import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addNewServer = false;
  serverCreationStatus = "No Server is created!";
  newServerName = '';
  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.addNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreatedServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "New Server was created!" +this.newServerName;
  }

  onUpdateServerName(event : Event) {
    this.newServerName = (<HTMLInputElement>event.target).value;
  }

}
