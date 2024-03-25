import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-display',
  templateUrl: './username-display.component.html',
  styleUrls: ['./username-display.component.css']
})
export class UsernameDisplayComponent implements OnInit {
  newUserName='';
  serverCreated = false;
  constructor() { }

  ngOnInit(): void {
  }

}
