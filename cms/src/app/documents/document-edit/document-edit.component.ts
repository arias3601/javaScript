import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {DocumentsService} from "../documents.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Document} from "../document";

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  oldDocument: any;
  editMode: boolean = false;


  constructor(private ds: DocumentsService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {

    this.subscription = this.actRoute.params.subscribe(
      (params: any) => {
        if(params['idx']){
          this.oldDocument = this.ds.getDocument(params['idx']);
          this.editMode = true;
        } else {
          this.oldDocument = null;
          this.editMode = false;
        }

      }
    )
  }



  onSubmit(value){

    let newDocument = new Document("", value.title, value.description, value.url, null);
   if(this.editMode){
     newDocument.id = this.oldDocument.id;
     this.ds.updateDocument(this.oldDocument, newDocument);
   }else {
    this.ds.addDocument(newDocument);
   }
   this.router.navigate(['documents']);
  }

  onCancel(){
    this.router.navigate(['documents']);
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
