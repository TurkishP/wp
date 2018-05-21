import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

  tiles = [
    {text: '부산가족여행!!!', cols: 3, rows: 1, color: 'lightblue'},
    {text: '나홀로 제주도 여행', cols: 1, rows: 2, color: 'lightgreen'},
    {text: '졸업여행 가즈아!', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
