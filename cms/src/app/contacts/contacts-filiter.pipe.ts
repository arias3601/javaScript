import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "./contact";

@Pipe({
  name: 'contactsFiliter'
})
export class ContactsFiliterPipe implements PipeTransform {

  transform(contacts: Contact[], [term]) { //term is only passing the first character
    let filteredArray: Contact[] = [];

    console.log(term);

    if (term == null || term == undefined){
      term = "";
    }

    filteredArray = contacts.filter(
      (contact: any) => contact.name.toLowerCase().includes(term.toLowerCase())
    );


    if (filteredArray.length < 1){
      return contacts;
    }

    return filteredArray;
  }

}
