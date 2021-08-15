import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class AlumnoComponent implements OnInit {
  public titulo: string;
  constructor() {
    this.titulo="Componente Alumno"
  }

  ngOnInit(): void {
  }

}
