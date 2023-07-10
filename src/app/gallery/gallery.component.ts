import { Component } from '@angular/core';
import { SlideInterface } from '../types/slide.interface';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  // slides: string[] = [
  //   "../../assets/images/gallery/gallery1.jpg",
  //   "../../assets/images/gallery/gallery2.jpg",
  //   "../../assets/images/gallery/gallery3.jpg"
  // ];

  // activeSlideIndex = 0;

  // nextSlide() {
  //   this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
  // }

  // previousSlide() {
  //   this.activeSlideIndex =
  //     (this.activeSlideIndex - 1 + this.slides.length) % this.slides.length;
  // }

  // myInterval = 3000;
  slides: SlideInterface[]  = [
    {
      url: '../../assets/images/gallery/gallery1.jpg',
    },
    {
      url: '../../assets/images/gallery/gallery2.jpg',
    },
    {
      url: '../../assets/images/gallery/gallery3.jpg',
    }
  ]

    // get slideIndex(): number {
    //   return this.slides.findIndex(slide => slide.active) + 1;
    // }

}