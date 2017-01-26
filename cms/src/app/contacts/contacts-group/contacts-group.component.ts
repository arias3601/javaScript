import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'cms-contacts-group',
  templateUrl: './contacts-group.component.html',
  styleUrls: ['./contacts-group.component.css']
})
export class ContactsGroupComponent implements OnInit {
  @Input() selectedContact: Contact;
  groupContacts: Contact[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.groupContacts = this.selectedContact.group;
  }

}
