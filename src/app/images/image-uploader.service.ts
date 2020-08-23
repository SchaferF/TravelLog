import { Directive, Injectable } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
@Directive({ selector: '[ng2FileSelect]' })
export class ImageUploaderService {
  private bearerToken = `Bearer ${environment.qimgToken}`;

  public uploader = new FileUploader({ url: `${environment.qimgAPI}`, itemAlias: 'image', maxFileSize: 2*1024*1024, authToken: this.bearerToken });
}
