import { Routes } from '@angular/router';
import { PomadaLyberdadeComponent } from './pages/landing-pages/pomada-lyberdade/pomada-lyberdade.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lyberdade', pathMatch: 'full' },
  { path: 'lyberdade', component: PomadaLyberdadeComponent, title: 'Pomada Lyberdade' },
];
