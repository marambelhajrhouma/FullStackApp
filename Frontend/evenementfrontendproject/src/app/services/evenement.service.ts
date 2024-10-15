import { Injectable } from '@angular/core';
import { Evenement } from '../models/evenement.model';
import { Theme } from '../models/theme.models';

import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { ThemeWrapper } from '../models/ThemeWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
};
@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  evenements: Evenement[]=[];
  /* themes : Theme[]; */

  apiURL: string ='http://localhost:8083/api';

  //URL de spring Data REST
  apiURLTheme: string='http://localhost:8083/theme';

  constructor(private http: HttpClient) { 
    /* this.themes=[
      {idTheme : 1, nomTheme : "Carthage"},
      {idTheme : 2, nomTheme : "Hammmamet"}
    ]; */
   
    /*
    this.evenements = [
      { idEvenement: 1, nomEvenement: "PC Asus", prixEvenement: 3000.60, dateCreation: new Date("2011-01-14"), theme: {idTheme : 1, nomTheme : "Carthage"} },
      { idEvenement: 2, nomEvenement: "Imprimante Epson", prixEvenement: 450, dateCreation: new Date("2010-12-17") , theme: {idTheme : 2, nomTheme : "Hammmamet"}},
      { idEvenement: 3, nomEvenement: "Tablette Samsung", prixEvenement: 900.12, dateCreation: new Date("2020-02-20"), theme: {idTheme : 1, nomTheme : "Carthage"} }
    ];*/
  }

  /*
  listeEvenement():Evenement[] {
    return this.evenements;
  }*/

  listeEvenement(): Observable<Evenement[]>{ 
    return this.http.get<Evenement[]>(apiURL); 
  }

  /*
  ajouterEvenement( ev: Evenement){ 
    this.evenements.push(ev); 
  }*/

    ajouterEvenement(ev : Evenement):Observable<Evenement>{ 
      return this.http.post<Evenement>(apiURL, ev, httpOptions); 
    }
    
  /* supprimerEvenement( ev: Evenement){ 
    //supprimer le produit prod du tableau produits 
    const index = this.evenements.indexOf(ev, 0); 
    if (index > -1) { 
      this.evenements.splice(index, 1); 
    } 
    //ou Bien 
    /* this.produits.forEach((cur, index) => { 
    if(prod.idProduit === cur.idProduit) { 
    this.produits.splice(index, 1); 
    } 
    }); */ 
 // }  

 supprimerEvenement(id : number) { 
  const url = `${apiURL}/${id}`; 
  return this.http.delete(url, httpOptions); 
}

/*
  consulterEvenement(id: number):Evenement{
    return this.evenements.find(ev=> ev.idEvenement ==id )!;
  }*/

    consulterEvenement(id: number): Observable<Evenement> { 
      const url = `${apiURL}/${id}`; 
      return this.http.get<Evenement>(url); 
    }

  trierProduits(){ 
    this.evenements = this.evenements.sort((n1,n2) => { 
      if (n1.idEvenement! > n2.idEvenement!) { 
        return 1; 
      } if (n1.idEvenement! < n2.idEvenement!) { 
        return -1;
      } return 0; 
    }); 
  }

  /*
  updateEvenement(ev: Evenement){
    //this.supprimerEvenement(ev);
    this.ajouterEvenement(ev);
    this.trierProduits();
  }*/

    updateEvenement(ev: Evenement): Observable<Evenement> {
      return this.http.put<Evenement>(`${apiURL}/${ev.idEvenement}`, ev);
    }

  /* listeThemes():Theme[] {
    return this.themes;
  }
  consulterTheme(id:number): Theme{
    return this.themes.find(theme => theme.idTheme == id)!;
    }   */
   //****Spring DataREST */ 
  rechercheParTheme(idTheme:number) :Observable<Evenement[]>{
    const url = `${this.apiURL}/themes/${idTheme}`; 
    return this.http.get<Evenement[]>(url);
  }

//le code de theme
  //****API REST */
  /*listeThemes():Observable<Theme[]>{
    return this.http.get<Theme[]>(apiURL+"/theme");
    }*/

   //****Spring DataREST */ 
   listeThemes():Observable<ThemeWrapper>{ 
    return this.http.get<ThemeWrapper>(this.apiURLTheme); 
  }

  rechercheParNom(nom: string): Observable<Evenement[]>{
    const url = `${this.apiURL}/evsByName/${nom}`;
    return this.http.get<Evenement[]>(url);
  }

  ajouterTheme( th: Theme):Observable<Theme>{
    return this.http.post<Theme>(this.apiURLTheme, th, httpOptions);
    }
    
}
