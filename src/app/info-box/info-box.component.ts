import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css'],
})
export class InfoBoxComponent implements OnInit {
  text = 'Additional Info-Text on our Info Box!';
  hidden = false;

  constructor() {}

  ngOnInit(): void {}

  onClickMe() {
    this.hidden = !this.hidden;
  }
}
