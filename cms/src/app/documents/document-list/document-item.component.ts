import { Component, OnInit } from '@angular/core';
import {Document} from "../document";
import {DocumentsService} from "../documents.service";

@Component({
  selector: 'cms-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent implements OnInit {
  private document: Document[] = [];
  constructor(private documentService: DocumentsService) { }

  ngOnInit() {
    this.document = this.documentService.getDocuments();
  }

}
