import {Component, OnInit, Input} from '@angular/core';
import {MessagesService} from "../messages.service";
import {Message} from "../message";

@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  messages: Message[] = [];
  @Input() message: Message;
  @Input() messageIdx: number;
  constructor(private messageService: MessagesService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }

}
