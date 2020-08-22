import { Component, OnInit } from '@angular/core';
import { ImageUploaderService } from '../image-uploader.service';

@Component({
  selector: 'app-get-image',
  templateUrl: './get-image.component.html',
  styleUrls: ['./get-image.component.css']
})
export class GetImageComponent implements OnInit {

  constructor(public imageUploaderService: ImageUploaderService) {}

  ngOnInit(): void {
    this.upload();
  }

  upload() : void {
    this.imageUploaderService.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.imageUploaderService.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload: uploaded successfully:', item, status, response);
      alert('Your file has been uploaded successfully');
      this.imageUploaderService.uploader.clearQueue();
    }
  }

}
