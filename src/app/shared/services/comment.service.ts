import { Injectable } from '@angular/core';
import { Comment } from '../../models/comment';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comments: Comment[];
  private id: number;
  constructor(private messageService: MessageService) { }

  add(comment: string, placeId: string): void {
    this.id++;
    const id = this.id.toString();
    const com:Comment = {id, placeId, comment}; 
    this.messageService.add(`CommentService comment added: ${com.id}`);
    this.comments.push(com);
  }

  filterCommentByPlaceId(placeId: string): void{
    this.comments.filter(x => x.placeId == placeId);
  }

  delete(id: string): void{
    this.comments = this.comments.filter(x => x.id !== id);
    this.messageService.add(`CommentService comment deleted: ${id}`);
  }

  clear(): void{
    this.comments = [];
  }
}
