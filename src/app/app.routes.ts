import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantComponent } from './enseignant/enseignant.component'; // Assurez-vous d'importer les composants standalone
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CoursComponent } from './cours/cours.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  { path: 'enseignant', component: EnseignantComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/etudiant', pathMatch: 'full' }, // Redirige vers /etudiant par défaut
];

@NgModule({
  imports: [],  // Déclare les routes à utiliser
  exports: [RouterModule]
})
export class AppRoutingModule { }
