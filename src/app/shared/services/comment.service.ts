import { Injectable } from '@angular/core';
import { Comment } from '../../models/comment';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comments: Comment[] = [];
  private id: number;
  private allComments: Comment[] = [];
  private placeId: string;
  constructor(private messageService: MessageService) { 
    this.initializeId();
  }

  add(comment: string, placeId: string): void {
    this.id++;
    const id = this.id.toString();
    const com:Comment = {id, placeId, comment}; 
    this.placeId = placeId;
    this.allComments.push(com);
    this.refreshComment();
    this.log(`added comment id=${com.id}`);
  }

  delete(id: string): void{
    this.allComments = this.allComments.filter(x => x.id !== id);
    this.refreshComment();
    this.initializeId();
    this.log(`deleted comment id=${id}`);
  }

  clear(): void{
    this.allComments = [];
    this.refreshComment();
    this.initializeId();
  }

  getComments(placeId: string) {
    this.placeId = placeId;
    this.refreshComment();
  }

  private initializeId(): void {
    this.id = this.comments.length;
  }

  private refreshComment(){
    this.comments = this.allComments.filter(x => x.placeId == this.placeId);
  }

  private log(message: string): void {
    this.messageService.add(`CommentService: ${message}`);
  }
}
