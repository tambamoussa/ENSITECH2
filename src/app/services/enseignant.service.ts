import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Enseignant } from '../enseignant/enseignant.component';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private enseignants: Enseignant[] = [
    { id: 1, nom: 'Tamba', prenom: 'Jean', email: 'jean.tamba@gmail.com', telephone: '221775503716', specialite: 'Java' },
    { id: 2, nom: 'Martin', prenom: 'Ndiaye', email: 'martin.ndiaye@gmail.com', telephone: '221785641230', specialite: 'UML' },
    { id: 1, nom: 'Tamba', prenom: 'Jean', email: 'jean.tamba@gmail.com', telephone: '221775503716', specialite: 'Java' },
    { id: 2, nom: 'Martin', prenom: 'Ndiaye', email: 'martin.ndiaye@gmail.com', telephone: '221785641230', specialite: 'UML' }
  ];

  constructor() {}

  // Simule la récupération de tous les enseignants
  getAllEnseignants(): Observable<Enseignant[]> {
    return of(this.enseignants);
  }

  // Simule l'ajout d'un enseignant
  addEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    const newEnseignant = { ...enseignant, id: this.enseignants.length + 1 };
    this.enseignants.push(newEnseignant);
    return of(newEnseignant);
  }

  // Simule la mise à jour d'un enseignant
  updateEnseignant(enseignant: Enseignant): Observable<Enseignant | null> {
    const index = this.enseignants.findIndex(e => e.id === enseignant.id);
    if (index !== -1) {
      this.enseignants[index] = enseignant;
      return of(enseignant);  // Retourne l'enseignant mis à jour
    }
    return of(null);  // Retourne null si l'enseignant n'est pas trouvé
  }

  // Simule la suppression d'un enseignant
  deleteEnseignant(id: number): Observable<void> {
    const index = this.enseignants.findIndex(enseignant => enseignant.id === id);
    if (index !== -1) {
      this.enseignants.splice(index, 1);
      return of(undefined);  // Retourne un observable vide pour simuler la suppression
    }
    return of(undefined);  // Si l'enseignant n'est pas trouvé, retourne un observable vide
  }
}
