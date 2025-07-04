import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pomada-lyberdade',
  imports: [
    CommonModule,
    FormsModule
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

}
