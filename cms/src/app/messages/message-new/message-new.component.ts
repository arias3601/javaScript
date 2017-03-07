import { Component, OnInit } from '@angular/core';
import {Contact} from "../../contacts/contact";
import {ContactsService} from "../../contacts/contacts.service";
import {MessagesService} from "../messages.service";
import {Router} from "@angular/router";
import {Message} from "../message";

@Component({
  selector: 'cms-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {
  sender: Contact;
  constructor(private cs: ContactsService, private ms: MessagesService,  private router: Router) {
    this.sender = cs.getCurrentContacts();
  }

  ngOnInit() {
  }
  onSubmit(value){
    const newMessage = new Message("", this.sender.name, "", value.message,);
    this.ms.addMessage(newMessage);
    this.router.navigate(['messages']);

  }

  onCancel(){
    this.router.navigate(['messages']);
  }
}
