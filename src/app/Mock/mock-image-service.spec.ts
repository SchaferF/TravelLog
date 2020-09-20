import { MockImageService } from './mock-image-service';

describe('MockImageService', () => {
  it('should create an instance', () => {
    expect(new MockImageService(null,null)).toBeTruthy();
  });
});
