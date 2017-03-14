import {Injectable, EventEmitter} from '@angular/core';
import {Message} from "./message";
import {MOCKMESSAGES} from "./MOCKMESSAGES"
import {Response, Http, Headers} from "@angular/http";
import 'rxjs';

@Injectable()
export class MessagesService {
  private messages: Message[] = [];
  currentMessageObj: Document;
  currentMessageId: string;
  getMessageEmitter = new EventEmitter<Message[]>();


  constructor(private http: Http) {
    this.initMessages();
    this.currentMessageId = '1';
  }

  getMessages(){
    this.messages = MOCKMESSAGES;
    return this.messages;
  }
  getMessage(idx: number){
    this.messages = MOCKMESSAGES;
    return this.messages[idx];
  }

  addMessage(message: Message){
    this.messages.push(message);
    this.storeMessages();
  }

  initMessages(){
    this.fetchData();
  }

  fetchData(){
    console.log("HERE FOR SURE");
    return this.http.get('https://akhcms.firebaseio.com/messages.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Message[]) => {
          this.messages = data;
          this.getMessageEmitter.emit(this.messages);
        }
      );
  }

  storeMessages(){
    const body = JSON.stringify(this.messages);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://akhcms.firebaseio.com/messages.json', body, {headers: headers}).toPromise();
  }

}
