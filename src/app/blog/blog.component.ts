import { Component, OnInit } from '@angular/core';
import { CvNelsonService } from '../services/cv-nelson.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(public cv: CvNelsonService){}
  blog: any []=[];

  
  

  ngOnInit(): void {
     
  }
  imagenDerecha: boolean = true;
  toggleImagenPosition() {
    this.imagenDerecha = !this.imagenDerecha;
  }

}
