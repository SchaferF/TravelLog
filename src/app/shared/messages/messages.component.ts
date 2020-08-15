import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  disableMessage: boolean;

  constructor(public messageService: MessageService) { 
    
  }

  ngOnInit(): void {
    this.disableMessage = environment.production;
  }

}
