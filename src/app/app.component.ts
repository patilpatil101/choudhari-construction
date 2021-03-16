import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpClient]
})
export class AppComponent {
  title = 'choudhari-construction';
  windowScrolled: boolean = false;
  sendEmailForm: FormGroup;
  message: string;

  constructor(@Inject(DOCUMENT) private document: Document, public http: HttpClient, private fb: FormBuilder) {
    
    this.sendEmailForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [''],
      message: ['', [Validators.required]],
      telephone: ['', [Validators.required]]
    });

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

  onSubmit(contactForm) {
    if (contactForm.valid) {
      const {name, email, message, telephone} = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xaylrvdk',
        { name: name, replyto: email, message: message, telephone: telephone },
        { 'headers': headers }).subscribe(response => {
            if (Object.entries(response).length > 0 && response['ok'] == true) {
              this.message = "Email sent successfully!"
              setTimeout(() => {
                this.message = undefined;
              },5000)
            }
          }
        );
    }
  }
}
