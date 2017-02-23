import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {DocumentsService} from "../documents.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Document} from "../document";
import {WindRefService} from "../../wind-ref.service";

@Component({
  selector: 'cms-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private documentIdx: number;
  document: Document;
  private nativeWindow:any;

  constructor(private ds: DocumentsService, private route: ActivatedRoute, private router: Router, WindRef: WindRefService) {
    this.nativeWindow = WindRef.getNativeWindow();
  }

  onView(){
    if(!this.document){
      return;
    }

    let currentUrl = this.document.url;
    this.nativeWindow.open(currentUrl);
  }

  onDelete(){
    this.ds.deleteDocument(this.document);
    this.router.navigate(['/documents']);
  }
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) =>{
        this.documentIdx = params['idx'];
        this.document = this.ds.getDocument(this.documentIdx);
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
