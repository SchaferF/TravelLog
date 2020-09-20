import { Injectable } from '@angular/core';
import { MessageService } from '../shared/services/message.service';

@Injectable()
export class MockMessageService extends MessageService{
    messages: string[] = [];

    add(message: string) {
      this.messages.push(message);
    }
   
    clear() {
      this.messages = [];
    }    
}
