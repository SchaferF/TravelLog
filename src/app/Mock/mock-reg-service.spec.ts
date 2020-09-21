import { MockMessageService } from './mock-message-service';
import { MockRegService } from './mock-reg-service';

describe('MockRegService', () => {
  let messageService: MockMessageService;
  let service: MockRegService;
  beforeEach(() => {
    messageService = new MockMessageService();
    service = new MockRegService(null, messageService);
  })

  afterEach(() => {
    messageService = null;
  })

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
