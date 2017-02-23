import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Contact} from "../contact";
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'cms-contacts-detail',
  templateUrl: 'contact-detail.component.html',
  styleUrls: ['contact-detail.component.css']
})
export class ContactsDetailComponent implements OnInit, OnDestroy {
  @Input() selectedContact: Contact;
  subscription: Subscription;
  private contactIdx: number;
  private contact: Contact;
  private contactGroup: Contact[];

  constructor(private cs: ContactsService, private router: Router, private activatedRotuer: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.activatedRotuer.params.subscribe(
      (params:any) => {
        this.contactIdx = params['idx'];
        this.contact = this.cs.getContact(this.contactIdx);
        this.contactGroup = this.contact.group;
      }
    )
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
