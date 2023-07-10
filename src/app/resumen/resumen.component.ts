import { Component } from '@angular/core';
//importamos el archivo
import { CvNelsonService } from '../services/cv-nelson.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {

  dataProfesional: any[] = [];
  dataExperiencia: any[] = [];
  dataEducacion: any[] = [];
  dataHabilidades: any[] = [];

  // para que no ejecute error hay que colocarle una variable local 
  //constructor(public cv: CvNelsonService){ }
  constructor( private cv: CvNelsonService) { }

  ngOnInit(): void{
    this.llenarDataProfesional()
    this.llenarDataExperiencia()
    this.llenarDataEducacion()
    this.llenarDataHabilidades()
  }

  llenarDataProfesional(){
    this.cv.getDataProfesional().subscribe(dataProfesional => {
      this.dataProfesional = dataProfesional;
      console.log(this.dataProfesional);
    })
  }
  
  llenarDataExperiencia(){
    this.cv.getDataExperiencia().subscribe(dataExperiencia => {
      this.dataExperiencia = dataExperiencia;
      console.log(this.dataExperiencia);
    })
  }
  llenarDataEducacion(){
    this.cv.getDataEducacion().subscribe(dataEducacion => {
      this.dataEducacion = dataEducacion;
      console.log(this.dataEducacion);
    })
  }
  llenarDataHabilidades(){
    this.cv.getDataHabilidades().subscribe(dataHabilidades => {
      this.dataHabilidades = dataHabilidades;
      console.log(this.dataHabilidades);
    })
  }

  
}
