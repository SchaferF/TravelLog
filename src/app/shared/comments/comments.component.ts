import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CommentService } from '../services/comment.service'; 
import { Comment } from '../../models/comment';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{

  @Input() placeId: string;

  addCommentError: boolean;
  newComment = new Comment();

  constructor(public commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComments(this.placeId);
  }

  onSumbmit(form: NgForm){
    if(form.valid){
      //hide the previous error
      this.addCommentError = false;
      //perfomr the add comment
      this.commentService.add(this.newComment.comment, this.placeId);
      this.newComment = new Comment();
      form.resetForm();
    }
  }

  delete(id: string): void {
    this.commentService.delete(id);
  }
}
