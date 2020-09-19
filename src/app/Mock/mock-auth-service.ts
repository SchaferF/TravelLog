import { AuthService } from'../security/auth.service';
import { User } from '../models/user'
import { Observable } from 'rxjs';
import { tap, map, retry } from "rxjs/operators";

export class MockAuthService extends AuthService{
    private users: User[] = [
        {'id': '1', 'href' : 'MOCKED_HREF_1', 'name' : 'MOCKED_USER_1', 'tripsCount' : 1, 'createdAt' : '19-09-2020', 'updatedAt' : '19-09-2020'},
        {'id': '2', 'href' : 'MOCKED_HREF_2', 'name' : 'MOCKED_USER_2', 'tripsCount' : 2, 'createdAt' : '19-09-2020', 'updatedAt' : '19-09-2020'},
        {'id': '3', 'href' : 'MOCKED_HREF_3', 'name' : 'MOCKED_USER_3', 'tripsCount' : 3, 'createdAt' : '19-09-2020', 'updatedAt' : '19-09-2020'},
        ];

    isAuthenticated(): Observable<boolean> {
      return new Observable<boolean>().pipe(map(() => {return (true);}));
    }

    getToken(): Observable<string> {
        return new Observable<string>().pipe(map(() => {return 'MOCKED_TOKEN'}));
    }

    getUser(): Observable<User> {
        return new Observable<User>().pipe(map(() => {
            return this.users[1];
        }));
    }
  }
