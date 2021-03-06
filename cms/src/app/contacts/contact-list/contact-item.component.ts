import {Component, OnInit, Input} from '@angular/core';
import {Contact} from "../contact";

@Component({
  moduleId: module.id,
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
   @Input() contact: Contact;
   @Input() contactIdx: number;



  constructor() { }

  ngOnInit() {
  }

}
