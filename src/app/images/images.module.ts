import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { FileUploadModule } from 'ng2-file-upload';
import { GetImageComponent } from './get-image/get-image.component';
import { MatTableModule } from '@angular/material/table' 
@NgModule({
  declarations: [ImagesComponent, GetImageComponent],
  imports: [
    CommonModule,
    FileUploadModule,
    MatTableModule
  ],
  exports: [ ImagesComponent,  GetImageComponent]
})
export class ImagesModule { }
