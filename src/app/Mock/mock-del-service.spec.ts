import { MockDelService } from './mock-del-service';
import { MockMessageService } from './mock-message-service';

describe('MockDelService', () => {
  let messageService: MockMessageService;

  beforeEach(() => {
    messageService = new MockMessageService();
  })

  afterEach(() => {
    messageService = null;
  })

  it('should create an instance', () => {
    expect(new MockDelService(null, messageService)).toBeTruthy();
  });
});
