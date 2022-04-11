import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  forumsAppImages: Array<object> = [{
    image: 'assets/images/projects/firebase-forums/forums-homepage.png',
    thumbImage: 'assets/images/projects/firebase-forums/forums-homepage.png',
    title: 'forums home',
    order: 1
  }, {
    image: 'assets/images/projects/firebase-forums/view-forum.png', 
    thumbImage: 'assets/images/projects/firebase-forums/view-forum.png', 
    title: 'view forum comments', 
    order: 2
  }, {
    image: 'assets/images/projects/firebase-forums/new-comment-error.png', 
    thumbImage: 'assets/images/projects/firebase-forums/new-comment-error.png', 
    title: 'new comment error if submitted text is null', 
    order: 3
  }, {
    image: 'assets/images/projects/firebase-forums/create-forum.png',
    thumbImage: 'assets/images/projects/firebase-forums/create-forum.png',
    title: 'create forum',
    order: 4
  }, {
    image: 'assets/images/projects/firebase-forums/new-forum-error.png',
    thumbImage: 'assets/images/projects/firebase-forums/new-forum-error.png',
    title: 'create forum error if any fields are null',
    order: 5
  },{
    image: 'assets/images/projects/firebase-forums/login.png',
    thumbImage: 'assets/images/projects/firebase-forums/login.png',
    title: 'login page',
    order: 6
  }, {
    image: 'assets/images/projects/firebase-forums/login-error.png',
    thumbImage: 'assets/images/projects/firebase-forums/login-error.png',
    title: 'invalid username error',
    order: 7
  }, {
    image: 'assets/images/projects/firebase-forums/login-password-error.png',
    thumbImage: 'assets/images/projects/firebase-forums/login-password-error.png',
    title: 'invalid password error',
    order: 8
  }, {
    image: 'assets/images/projects/firebase-forums/registration.png',
    thumbImage: 'assets/images/projects/firebase-forums/registration.png',
    title: 'registration page',
    order: 9
  }, {
    image: 'assets/images/projects/firebase-forums/registration-error.png',
    thumbImage: 'assets/images/projects/firebase-forums/registration-error.png',
    title: 'email already in use registration error ',
    order: 10
  }];

  discountCalcImages: Array<object> = [{  
    image: 'assets/images/discount-calculator/discount-initial.png',
    thumbImage: 'assets/images/discount-calculator/discount-initial.png',
    title: 'Initial Screen',
    order: 1
  }, {
    image: 'assets/images/discount-calculator/discount-calculation.png', 
    thumbImage: 'assets/images/discount-calculator/discount-calculation.png',
    title: 'Discount Calculation', 
    order: 2
  }];

}
