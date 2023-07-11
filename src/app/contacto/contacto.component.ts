import { Component, OnInit } from '@angular/core';
import { CvNelsonService } from '../services/cv-nelson.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent  implements OnInit {
 
  constructor(public cv: CvNelsonService) { }

  ngOnInit(): void{
  
  } 

}