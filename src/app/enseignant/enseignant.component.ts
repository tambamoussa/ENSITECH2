import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnseignantService } from '../services/enseignant.service';
import { HttpClientModule } from '@angular/common/http';

export interface Enseignant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  specialite: string;
}

@Component({
  selector: 'app-enseignant',
  standalone: true,
  imports: [ CommonModule, RouterModule,CommonModule, FormsModule, HttpClientModule],
  templateUrl: './enseignant.component.html',
  styleUrl: './enseignant.component.css'
})
  export class EnseignantComponent implements OnInit {
    enseignants: Enseignant[] = [];

  constructor(private enseignantService: EnseignantService) {}

  ngOnInit(): void {
    this.loadEnseignants();
  }

  // Charge la liste des enseignants
  loadEnseignants(): void {
    this.enseignantService.getAllEnseignants().subscribe(data => {
      this.enseignants = data;
    });
  }

  // Ajouter un enseignant
  addEnseignant(): void {
    const newEnseignant: Enseignant = { id: 0, nom: 'Doe', prenom: 'John', email: 'john.doe@example.com', telephone: '1234567890', specialite: 'Informatique' };
    this.enseignantService.addEnseignant(newEnseignant).subscribe(enseignant => {
      this.enseignants.push(enseignant);  // Ajouter l'enseignant à la liste
    });
  }

  // Modifier un enseignant
  editEnseignant(enseignant: Enseignant): void {
    const updatedEnseignant = { ...enseignant, specialite: 'Chimie' };  // Mise à jour de la spécialité
    this.enseignantService.updateEnseignant(updatedEnseignant).subscribe(() => {
      this.loadEnseignants();  // Recharge la liste des enseignants après mise à jour
    });
  }

  // Supprimer un enseignant
  deleteEnseignant(id: number): void {
    this.enseignantService.deleteEnseignant(id).subscribe(() => {
      this.loadEnseignants();  // Recharge la liste après suppression
    });
  }
  }

