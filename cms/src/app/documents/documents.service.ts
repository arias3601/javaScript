import { Injectable } from '@angular/core';
import {Document} from "./document";
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
@Injectable()
export class DocumentsService {
  private document: Document[] = [];

  constructor() { }

  getDocuments(){
    this.document = MOCKDOCUMENTS;
    return this.document;
  }
  getDocument(idx:number){
    this.document = MOCKDOCUMENTS;
    return this.document[idx];
  }
  deleteDocument(document: Document){
    this.document.splice(this.document.indexOf(document), 1)
  }

  updateDocument(oldDoc: Document, newDoc: Document){
    this.document[this.document.indexOf(oldDoc)] = newDoc;
  }

  addDocument(newDoc: Document){
    this.document.push(newDoc);
  }
}
