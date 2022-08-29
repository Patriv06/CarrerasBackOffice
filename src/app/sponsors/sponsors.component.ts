import { Component, OnInit } from '@angular/core';
import { Sponsors } from './sponsors';
import { SponsorsService } from './sponsors.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  pages: number = 1;
  spo!: Sponsors[];
  spon = {
    id:1,
    logoSponsor:" ",
    linkSponsor:" ",
    espacioSponsor:" ",
    }

   


  constructor(private sponsorsServicio:SponsorsService) { }
  
  ngOnInit(): void {
     this.traerSponsors();
  
  }
  
  private traerSponsors(){
   this.sponsorsServicio.obtenerSponsors().subscribe(dato =>{this.spo = dato})
   
    console.log(this.spo);
    }
    public modifSponsors(spo:Sponsors){
      if (spo.logoSponsor != " "){
        this.sponsorsServicio.modificarSponsors(spo).subscribe(()=>this.traerSponsors());
      }
      else{  alert("El Logo no puede estar en blanco")}
      }
    
      public delSponsors(sponsors:Sponsors):void{
       this.sponsorsServicio.borrarSponsors(sponsors).subscribe(()=>this.traerSponsors());
      
       
     }
     public altaSponsor(sponso:Sponsors){
      if (sponso.logoSponsor != " "){
      this.sponsorsServicio.crearSponsors(sponso).subscribe((dato: { id: number; logoSponsor: string; linkSponsor:string; espacioSponsor: string}) =>{sponso = dato});
    
      }
      else{  alert("El Logo no puede estar en blanco")}
    }
    recargar(): void {
      window.location.reload();
    }
  
    
    
    }
    
    
