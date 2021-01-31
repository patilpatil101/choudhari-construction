import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
  state: string;

  constructor(private router: Router) {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.scrollTo(0, currentScroll - (currentScroll));
      }
    })();
  }

  ngOnInit(): void {
    if (this.router.url.includes('completed')) {
      this.state = 'Completed'
    } else if(this.router.url.includes('ongoing')){
      this.state = 'Ongoing'
    } else if(this.router.url.includes('upcoming')){
      this.state = 'Upcoming'
    }
  }

}
