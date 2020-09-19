import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { SearchTripResponse } from '../models/search-trip-response';
import { TripService } from '../trips/trip.service';
import { User } from '../models/user';
import { AuthService } from '../security/auth.service';
import { MockAuthService } from '../Mock/mock-auth-service';



class MockTripService extends TripService{

}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let testTripService: TripService;
  let componentTripService: TripService;
  let testAuthService: AuthService;
  let componentAuthService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [AuthService, TripService]
    })
    .compileComponents();

    TestBed.overrideComponent(DashboardComponent,
      {set: {providers: [
        { provide: AuthService, useClass: MockAuthService}, 
        { provide: TripService, useClass: MockTripService}, 
      ]}}
    );

    // create component and test fixture
    fixture = TestBed.createComponent(DashboardComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // AuthService provided to the TestBed
    testAuthService = TestBed.get(AuthService);

    // AuthService provided by Component, (should return MockAuthService)
    componentAuthService = fixture.debugElement.injector.get(AuthService); 
    
    // AuthService provided to the TestBed
    testTripService = TestBed.get(TripService);

    // AuthService provided by Component, (should return MockAuthService)
    componentTripService = fixture.debugElement.injector.get(TripService); 
        
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
