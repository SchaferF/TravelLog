import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageService } from '../images/image.service';
import { ImageResponse } from '../models/image-response';

@Injectable()
export class MockImageService extends ImageService {
    private images: ImageResponse[] = [
        {'id': 'MOCK_ID_1', 'size': 1024, 'tokenId': 'MOCK_TOCKENID_1', 'url': 'MOCKED_URL_1', 'createdAt': new Date(2020,1,1)},
        {'id': 'MOCK_ID_2', 'size': 1024, 'tokenId': 'MOCK_TOCKENID_2', 'url': 'MOCKED_URL_2', 'createdAt': new Date(2020,1,1)},
        {'id': 'MOCK_ID_3', 'size': 1024, 'tokenId': 'MOCK_TOCKENID_3', 'url': 'MOCKED_URL_3', 'createdAt': new Date(2020,1,1)},
        {'id': 'MOCK_ID_4', 'size': 1024, 'tokenId': 'MOCK_TOCKENID_4', 'url': 'MOCKED_URL_4', 'createdAt': new Date(2020,1,1)},
        {'id': 'MOCK_ID_5', 'size': 1024, 'tokenId': 'MOCK_TOCKENID_5', 'url': 'MOCKED_URL_5', 'createdAt': new Date(2020,1,1)},
    ]

    getImages(): Observable<ImageResponse[]> {
        return new Observable<ImageResponse[]>().pipe(
          map(() => {
            return this.images;
          })
        );
      }
    
      delete(id: string): Observable<ImageResponse> {
        return new Observable<ImageResponse>().pipe(
          map((response) => {
            return this.images.find(x => x.id == id);
          })
        );
      }

}
