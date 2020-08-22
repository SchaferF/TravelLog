import { Component, OnInit } from '@angular/core';
import { ImageResponse } from '../../models/image-response';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images : ImageResponse[];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.imageService.getImages()
    .subscribe(images => {
      this.images = images;
    });
  }

  delete(image: ImageResponse): void {
    this.images.filter(x => x !== image);
  }
}
