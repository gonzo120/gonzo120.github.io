import { Component, OnInit } from '@angular/core';
import { CvNelsonService } from '../services/cv-nelson.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
 
  constructor(public cv: CvNelsonService) { }

  ngOnInit(): void{
  
  }

}
