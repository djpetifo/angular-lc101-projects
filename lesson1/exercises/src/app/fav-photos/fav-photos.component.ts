import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/99118326_2868689543186542_9108254299003027456_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_ohc=w5lGz6NSpdgAX_KLkzi&_nc_ht=scontent.ftpa1-1.fna&oh=a465f05986e6c8a8570bbead6bf63b90&oe=5EEEEBA7';
  image3 = 'https://res.cloudinary.com/practicaldev/image/fetch/s--8Hk5vH1Y--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://pbs.twimg.com/media/EYe3aBjXkAUrRzD%3Fformat%3Dpng%26name%3Dsmall';

  constructor() { }

  ngOnInit() {
  }

}