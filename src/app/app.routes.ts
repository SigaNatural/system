import { Routes } from '@angular/router';
import { PomadaLyberdadeComponent } from './pages/landing-pages/pomada-lyberdade/pomada-lyberdade.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pomada-lyberdade', pathMatch: 'full' },
  { path: 'pomada-lyberdade', component: PomadaLyberdadeComponent },
];
