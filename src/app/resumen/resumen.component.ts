import { Component, OnInit } from '@angular/core';
//importamos el archivo
import { CvNelsonService } from '../services/cv-nelson.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit{
  


  // para que no ejecute error hay que colocarle una variable local 
  //constructor(public cv: CvNelsonService){ }
  constructor(public cv: CvNelsonService) { }

  ngOnInit(): void{
  
  }

  
  
  

  
}
