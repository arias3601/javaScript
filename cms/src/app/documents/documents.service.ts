import {Injectable, EventEmitter} from '@angular/core';
import {Document} from "./document";
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
import {Http, Response, Headers} from "@angular/http";
@Injectable()
export class DocumentsService {
  private document: Document[] = [];
  currentDocumentObj: Document;
  currentDocumentId: string;
  getDocumentEmitter = new EventEmitter<Document[]>();

  constructor(private http: Http) {
    this.initDocuments();
    this.currentDocumentId = '1';
  }

  getDocuments(){
    this.document = MOCKDOCUMENTS;
    return this.document;
  }
  getDocument(idx:number){
    this.document = MOCKDOCUMENTS;
    return this.document[idx];
  }
  deleteDocument(document: Document){
    if(!document){
      return;
    }

    const pos = this.document.indexOf(document);
    if (pos < 0){
      return;
    }
    this.document.splice(pos, 1);
    this.storeDocuments();
  }

  updateDocument(oldDoc: Document, newDoc: Document){
    this.document[this.document.indexOf(oldDoc)] = newDoc;
    this.storeDocuments();
  }

  addDocument(newDoc: Document){
    if(document === null)
      return;
    this.document.push(newDoc);
    this.storeDocuments();
  }

  //SAID contacts in the lab
  initDocuments(){}

  fetchData(){
    return this.http.get('https://akhcms.firebaseio.com/documents.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Document[]) => {
          this.document = data;
          this.getDocumentEmitter.emit(this.document);
        }
      );
  }

  storeDocuments(){
    const body = JSON.stringify(this.document);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://akhcms.firebaseio.com/documents.json', body, {headers: headers}).toPromise();
  }

}
