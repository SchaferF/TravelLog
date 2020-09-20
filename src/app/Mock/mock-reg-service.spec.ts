import { MockRegService } from './mock-reg-service';

describe('MockRegService', () => {
  it('should create an instance', () => {
    expect(new MockRegService(null)).toBeTruthy();
  });
});
