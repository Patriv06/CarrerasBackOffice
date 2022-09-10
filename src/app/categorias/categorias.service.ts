import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Categorias } from './categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private baseURL="https://back-ranking.azurewebsites.net/ver/categorias";
  private modifURL ="https://back-ranking.azurewebsites.net/modif/categorias";
  private delURL="https://back-ranking.azurewebsites.net/delete/categorias/";
  private altaURL="https://back-ranking.azurewebsites.net/categorias"
  cat = {
    id:1,
    nombreCategoria:" ",
    ponderadorCategoria:0.5,
    linkCategoria:" ",
    
  }

  constructor(private httpClient:HttpClient) { }
  
  obtenerCategorias():Observable<Categorias[]>{
   
    
    return this.httpClient.get<Categorias[]>(`${this.baseURL}`);
    
       
  }

  modificarCategorias( categorias:Categorias) { 
   
   return this.httpClient.put<Categorias>(`${this.modifURL}`, categorias)

  
  }

  borrarCategorias(categorias:Categorias){
   
   return this.httpClient.delete<Categorias>(this.delURL+ categorias.id)



   
  }
  crearCategorias(categorias:Categorias){
   
    return this.httpClient.post<Categorias>(`${this.altaURL}`, categorias)
  
  }

}
