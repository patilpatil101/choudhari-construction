import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'choudhari-construction';
  windowScrolled: boolean = false;

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

  constructor(private viewportScroller: ViewportScroller, @Inject(DOCUMENT) private document: Document) {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.scrollTo(0, currentScroll - (currentScroll));
      }
    })();
  }

}
