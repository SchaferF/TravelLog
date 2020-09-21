import { HandleError } from './handle-error';
import {MockMessageService} from '../Mock/mock-message-service';

describe('HandleError', () => {
  let messageService: MockMessageService;
  beforeEach(() => {
    messageService = new MockMessageService();
  })

  afterEach(() => {
    messageService = null;
  })

  it('should create an instance', () => {
    expect(new HandleError(messageService)).toBeTruthy();
  });
});
