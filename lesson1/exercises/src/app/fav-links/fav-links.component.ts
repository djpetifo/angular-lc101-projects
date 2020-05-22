import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  
  faveLinks: string[] = ['https://www.facebook.com/MrMaintenance305/videos/10163571041645164/', 'https://www.hackerrank.com/']
  constructor() { }

  ngOnInit() {
  }

}
