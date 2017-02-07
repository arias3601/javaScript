import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Contact} from "../contact";
import {ContactsComponent} from "../contacts.component";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  contact: Contact = null;
  contacts: Contact[] = [];

  @Output() selectedContactEmit = new EventEmitter<Contact>();


  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  onSelected(contact: Contact) {
    this.selectedContactEmit.emit(contact);
  }


}




