import { Injectable } from '@angular/core';
import {Document} from "./document";
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
@Injectable()
export class DocumentsService {
  private documents: Document[] = [];

  constructor() { }

  getDocuments(){
    this.documents = MOCKDOCUMENTS;
    return this.documents;
  }
  getDocument(idx:number){
    this.documents = MOCKDOCUMENTS;
    return this.documents[idx];
  }

}
