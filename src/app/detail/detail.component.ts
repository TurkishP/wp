import { Component } from '@angular/core';

@Component({
  selector: 'detail-root',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  
})
export class DetailComponent {
  tiles = [
    {img : "http://cfile233.uf.daum.net/image/1516C8435036A8D2228504", cols: 1, rows: 1, },
    {img : "http://cfile22.uf.tistory.com/image/2602AE35592FEB5A2517DA", cols: 1, rows: 1, },
    {img : "http://cfile2.uf.tistory.com/image/141FBD4B4E46695C083ED2", cols: 1, rows: 1, },
    {img : "http://cfile28.uf.tistory.com/image/27199B3A588AA9CC2179A4", cols: 1, rows: 1, },
    {img : "http://cfile201.uf.daum.net/image/2260E038525BEA6B06E2DB", cols: 1, rows: 1, },
  
  ];
  mainImg = "http://cfile233.uf.daum.net/image/1516C8435036A8D2228504"
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host))
  title = 'app';
  choice(tile){
    this.mainImg = tile.img
  }
}
