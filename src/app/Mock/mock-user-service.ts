import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../api/services/user.service';
import { User } from '../models/user';

@Injectable()
export class MockUserService extends UserService {
    private users: User[] = [
        {'id': 'MOCKED_ID_1', 'href': 'MOCKED_HREF_1', 'name': 'MOCKED_NAME_1', 'tripsCount': 0, 'createdAt': new Date(2020,1,1).toString(), 'updatedAt': new Date(2020,12,31).toString()},
        {'id': 'MOCKED_ID_2', 'href': 'MOCKED_HREF_2', 'name': 'MOCKED_NAME_2', 'tripsCount': 0, 'createdAt': new Date(2020,1,1).toString(), 'updatedAt': new Date(2020,12,31).toString()},
        {'id': 'MOCKED_ID_3', 'href': 'MOCKED_HREF_3', 'name': 'MOCKED_NAME_3', 'tripsCount': 0, 'createdAt': new Date(2020,1,1).toString(), 'updatedAt': new Date(2020,12,31).toString()}    
    ]
    loadAllUsers(): Observable<User[]> {
        return new Observable<User[]>().pipe(
            map(() => {
                return this.users;
            })
        );
      }    
}
