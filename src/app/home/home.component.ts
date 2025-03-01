import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides: any[] = [
    { image: 'assets/images/slide1.jpg', caption: 'Slide 1' },
    { image: 'assets/images/slide2.jpg', caption: 'Slide 2' },
    { image: 'assets/images/slide3.jpg', caption: 'Slide 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
