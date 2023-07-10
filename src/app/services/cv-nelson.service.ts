import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//aqui creamos nuestros servicios
@Injectable({
  providedIn: 'root'
})
export class CvNelsonService {
  dataProfesional: any[] = [];
  dataExperiencia: any[] = [];
  dataHabilidades: any[] = [];
  dataEducacion: any[] = [];
  dataEducacion_informal: any[] = [];
  
  //las variables empiezan vacias
  

  constructor(private http: HttpClient){ 
    this.getDataProfesional();
    this.getDataExperiencia();
    this.getDataHabilidades();
    this.getDataEducacion();
    this.getDataEducacionInformal();
  }

    public getDataProfesional() {
      this.http.get('https://portafolio-ngc-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe((resp:any) => {
        this.dataProfesional = resp;
        console.log(resp);
      });
      }
    public getDataExperiencia() {
      this.http.get('https://portafolio-ngc-default-rtdb.firebaseio.com/Experiencia.json')
      .subscribe((resp:any) => {
        this.dataExperiencia = resp;
        console.log(resp);
      });
      }
    public getDataHabilidades() {
      this.http.get('https://portafolio-ngc-default-rtdb.firebaseio.com/Habilidades.json')
      .subscribe((resp:any) => {
        this.dataHabilidades = resp;
        console.log(resp);
      });
      }
    public getDataEducacion() {
      this.http.get('https://portafolio-ngc-default-rtdb.firebaseio.com/Educacion.json')
      .subscribe((resp:any) => {
        this.dataEducacion = resp;
        console.log(resp);
      });
      }
    public getDataEducacionInformal() {
      this.http.get('https://portafolio-ngc-default-rtdb.firebaseio.com/Educacion_informal.json')
      .subscribe((resp:any) => {
        this.dataEducacion_informal = resp;
        console.log(resp);
      });
      }
  
}