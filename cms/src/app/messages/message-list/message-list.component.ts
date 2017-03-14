import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../messages.service";
import {Message} from "../message";

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  message: Message = null;
  messages: any[] = [];
  constructor(private messageService: MessagesService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.messageService.getMessageEmitter.subscribe(
      (documnet: Document[]) => this.messages = documnet
    );
  }



}
