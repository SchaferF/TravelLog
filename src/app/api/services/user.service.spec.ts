import { TestBed, getTestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { User } from 'src/app/models/user';

describe('UserService', () => {
  let injector: TestBed;
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });  

  it('should be created', () => {
    expect(service).toBeTruthy();
  }); 

  describe('#getUsers', () => {
    it('should return an Observable<User[]>', () => {
      const dummyUsers: User[] = [
        { id: '1',
          href : 'o234acBBBNFjk',
          name : 'Florian',
          tripsCount : 0,
          createdAt : '20-07-1979',
          updatedAt : '20-02-2020'},
        { id: '12',
          href : 'httUUUIn564',
          name : 'Manon',
          tripsCount : 60,
          createdAt : '01-06-1990',
          updatedAt : '20-02-2020'}
      ];
  
      service.loadAllUsers().subscribe(users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(dummyUsers);
      });
  
      const req = httpMock.expectOne(`${environment.apiUrl}/users`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyUsers);
    });
  });  
});
