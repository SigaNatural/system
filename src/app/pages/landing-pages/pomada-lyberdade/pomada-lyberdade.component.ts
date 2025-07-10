import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pomada-lyberdade',
  imports: [
    CommonModule
  ],
  templateUrl: './pomada-lyberdade.component.html',
  styleUrl: './pomada-lyberdade.component.scss',
  standalone: true
})
export class PomadaLyberdadeComponent {

  imagesInViewBenefit: boolean[] = [false, false, false, false, false];

  ngAfterViewInit() {
    const imgs = document.querySelectorAll('.benefit-animate');
    imgs.forEach((img, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.imagesInViewBenefit[idx] = true;
            observer.disconnect();
          }
        },
        { threshold: 1 }
      );
      observer.observe(img);
    });
  }

  //Direciona para a section de compra de forma lenta
  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  sendWhatsApp() {
    var waText = 'Olá, venho através do site Pomada Lyberdade solicitar mais informações sobre a pomada.';
    const url = `https://wa.me/5581993282341/?text=${waText}`;
    window.open(url, '_blank');
  }

  openLinkExternal(url: string) {
    window.open(url, '_blank');
  }
}
