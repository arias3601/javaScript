import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {Contact} from "../contact";
import {ContactsService} from "../contacts.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private editMode: boolean = false;
  private hasGroup: boolean = false;
  private contactIdx: number;
  private contact: Contact;
  private groupContacts: Contact[] = [];
  private invalidGroupContact: boolean = true;

  constructor(private cs: ContactsService, private router: Router, private actRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this.editMode = false;
    this.hasGroup = false;
    this.invalidGroupContact = false;

    this.subscription = this.actRoute.params.subscribe(
      (params: any) => {
        this.contactIdx = params['idx'];
        if(this.contactIdx) {
          this.contact = this.cs.getContact(this.contactIdx);
          console.log(this.contact);
           this.editMode = true;

          if (this.contact.group.length > 0) {
            this.hasGroup = true;
            this.groupContacts = this.contact.group;
          }
         }
      }
    )
  }

  onSubmit(value){
    let newContact = new Contact(null, value.name, value.email, value.phone, value.img, this.groupContacts);
    if(this.editMode){
      newContact.contactId = this.contact.contactId;
      this.cs.updateContact(this.contact, newContact);
    }else {
      this.cs.addContact(newContact);
    }
    this.router.navigate(['contacts']);
  }

  onCancel(){
    this.router.navigate(['contacts']);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  isInvalidContact(newContact: Contact){
    if(!newContact){
      return true;
    }

    if(newContact.contactId === this.contact.contactId){
     return true;
    }

    for (let i = 0; i < this.groupContacts.length; i++){
      if(newContact.contactId === this.groupContacts[i].contactId){
        return true;
      }
    }
    return false;
  }

  addToGroup($event: any){
    let selectedContact: Contact = $event.dragData;
    this.invalidGroupContact = this.isInvalidContact(selectedContact);
    if (this.invalidGroupContact){
      return
    }
    this.groupContacts.push(selectedContact);
    this.invalidGroupContact = false;
  }

  onRemoveItem(idx: number){
    if(idx < 0 || idx >= this.groupContacts.length){
      return;
    }
    this.groupContacts.splice(idx, 1);
    this.invalidGroupContact = false;
  }
}
