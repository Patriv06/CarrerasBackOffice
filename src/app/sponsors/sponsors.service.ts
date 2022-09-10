import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsors } from './sponsors';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  private baseURL="https://back-ranking.azurewebsites.net/ver/sponsors";
  private modifURL ="https://back-ranking.azurewebsites.net/modif/sponsors";
  private delURL="https://back-ranking.azurewebsites.net/delete/sponsors/";
  private altaURL="https://back-ranking.azurewebsites.net/Sponsors"
 
  

  constructor(private httpClient:HttpClient) { }
  
  obtenerSponsors():Observable<Sponsors[]>{
   
    
    return this.httpClient.get<Sponsors[]>(`${this.baseURL}`);
    
       
  }

  modificarSponsors( sponsors:Sponsors) { 
   
   return this.httpClient.put<Sponsors>(`${this.modifURL}`, sponsors)

  
  }

  borrarSponsors(sponsors:Sponsors){
   
   return this.httpClient.delete<Sponsors>(this.delURL+ sponsors.sponsorsid)



   
  }
  crearSponsors(sponsors:Sponsors){
   
    return this.httpClient.post<Sponsors>(`${this.altaURL}`, sponsors)
  
  }
 

}
