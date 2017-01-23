import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  //contacts: Contact[] = [];
  @Output() selectedContact = new EventEmitter<Contact>();
  contact = new Contact(0, "Dummy", "Dummy@localhost.com", 208123456, "http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest?cb=20130309213400", "test")

  constructor() { }

  ngOnInit() {
  }

  onSelected(contact: Contact){
    this.selectedContact.emit(contact);
  }

}
