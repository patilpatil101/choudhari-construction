import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ongoingProjects = [
    {
      url: '../assets/images/ongoing-project-images/op1.jpg',
      altText: 'First Slide',
      viewMore: 'https://www.youtube.com'
    },
    {
      url: '../assets/images/ongoing-project-images/op2.jpg',
      altText: 'Second Slide',
      viewMore: ''
    },
    {
      url: '../assets/images/ongoing-project-images/op3.jpg',
      altText: 'Third Slide',
      viewMore: ''
    },
    {
      url: '../assets/images/ongoing-project-images/op4.jpg',
      altText: 'Forth Slide',
      viewMore: ''
    },
    {
      url: '../assets/images/ongoing-project-images/op5.jpg',
      altText: 'Fifth Slide',
      viewMore: ''
    }
  ]

  completedProjects = [
    {
      url: '../assets/images/completed-project-images/cp1.jpg',
      altText: 'First Slide',
      viewMore: ''
    },
    {
      url: '../assets/images/completed-project-images/cp2.jpg',
      altText: 'Second Slide',
      viewMore: ''
    },
    {
      url: '../assets/images/completed-project-images/cp3.jpg',
      altText: 'Third Slide',
      viewMore: ''
    },
    {
      url: '../assets/images/completed-project-images/cp4.jpg',
      altText: 'Third Slide',
      viewMore: ''
    },
    {
      url: '../assets/images/completed-project-images/cp5.jpg',
      altText: 'Third Slide',
      viewMore: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
