import { Injectable } from '@angular/core';
import { DelService } from '../security/del.service';
import { DelAuthRequest } from '../models/del-auth-request';

@Injectable()
export class MockDelService extends DelService {
    delete(delRequest: DelAuthRequest): void {
        ;
      }    
}
