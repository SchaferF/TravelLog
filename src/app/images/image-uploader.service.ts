import { Directive, Injectable } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';

@Injectable({
  providedIn: 'root'
})
@Directive({ selector: '[ng2FileSelect]' })
export class ImageUploaderService {
  private uploadAPI = 'http://localhost:4000/api/upload';
  
  public uploader = new FileUploader({ url: this.uploadAPI, itemAlias: 'file', maxFileSize: 2*1024*1024 });
}
