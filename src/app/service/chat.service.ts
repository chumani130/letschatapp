import { Injectable, inject } from '@angular/core';
import { Database } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private database = inject(Database)
  constructor( ) { }

  getMessages() {
    return this.database.list('/messages').valueChanges();
  }

  sendMessage(text: string) {
    this.database.list('/messages').push({
      text,
      createdAt: new Date().toString()
    });
  }
}
