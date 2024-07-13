import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const footerElement = document.querySelector('.footer') as HTMLElement;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      footerElement.style.bottom = '0';
    } else {
      footerElement.style.bottom = '-100px';
    }
  }
}
