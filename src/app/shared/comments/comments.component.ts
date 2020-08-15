import { Component, Input } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CommentService } from '../services/comment.service'; 
import { Comment } from '../../models/comment';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent{

  @Input() placeId: string;

  addCommentError: boolean;
  newComment: Comment = {'id':"",'placeId':"",'comment':""};

  constructor(public commentService: CommentService) { }

  onSumbmit(form: NgForm){
    if(form.valid){
      //hide the previous error
      this.addCommentError = false;

      //perfomr the add comment
      this.commentService.add(this.placeId, this.newComment.comment);
      this.newComment = {'id':"",'placeId':"",'comment':""};
    }
  }

  delete(id: string): void {
    this.commentService
  }
}
