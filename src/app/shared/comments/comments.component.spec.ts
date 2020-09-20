import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockMessageService } from 'src/app/Mock/mock-message-service';
import { CommentService } from '../services/comment.service';

import { CommentsComponent } from './comments.component';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let commentService: CommentService;
  let messageService: MockMessageService;

  beforeEach(() => {
    messageService = new MockMessageService();
    commentService = new CommentService(messageService);
    component = new CommentsComponent(commentService);
  });

  afterEach(() => {
    messageService = null;
    commentService = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should correctly render the passed @Input value', () => {
    component.placeId = '12345'; // 1
    expect(component.placeId).toBeTruthy();
  });

});
