import { Component } from '@angular/core';
import { LogoInterface } from '../types/logo.interface';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.css']
})
export class CollaborationsComponent {
  logos: LogoInterface[]  = [
    {
      url: '../../assets/images/collaborations/emami.jpeg',
    },
    {
      url: '../../assets/images/collaborations/indo-bangla.jpeg',
    },
    {
      url: '../../assets/images/collaborations/arpan.jpg',
    },
    {
      url: '../../assets/images/collaborations/bss.jpg',
    },
    {
      url: '../../assets/images/collaborations/cii.jpg',
    },
    {
      url: '../../assets/images/collaborations/iicsr.jpg',
    },
    {
      url: '../../assets/images/collaborations/rotary.jpg',
    },
    {
      url: '../../assets/images/collaborations/z2plus.jpg',
    },
    {
      url: '../../assets/images/collaborations/rotary-int.svg',
    },
    {
      url: '../../assets/images/collaborations/msme.jpg',
    },
    {
      url: '../../assets/images/collaborations/nyks.png',
    },
    {
      url: '../../assets/images/collaborations/phoenix.png',
    },
    {
      url: '../../assets/images/collaborations/rmbf.png',
    },
    {
      url: '../../assets/images/collaborations/sonali.png',
    }
  ]
}
