import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//aqui creamos nuestros servicios
@Injectable({
  providedIn: 'root'
})
export class CvNelsonService {
  //las variables empiezan vacias
  private urlApiProfesional = 'https://portafolio-ngc-default-rtdb.firebaseio.com/Profesional.json';
  private urlApiExperiencia = 'https://portafolio-ngc-default-rtdb.firebaseio.com/Experiencia.json';
  private urlApiHabilidades = 'https://portafolio-ngc-default-rtdb.firebaseio.com/Habilidades.json';
  private urlApiEducacion = 'https://portafolio-ngc-default-rtdb.firebaseio.com/Educacion.json';

  constructor(private http: HttpClient){ }

    public getDataProfesional(): Observable<any> {
      return this.http.get<any>(this.urlApiProfesional);
    }
    public getDataExperiencia(): Observable<any> {
      return this.http.get<any>(this.urlApiExperiencia);
    }
    public getDataHabilidades(): Observable<any> {
      return this.http.get<any>(this.urlApiHabilidades);
    }
    public getDataEducacion(): Observable<any> {
      return this.http.get<any>(this.urlApiEducacion);
    }
  
}
