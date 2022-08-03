import { Injectable } from '@angular/core';
import { ParkingInfo } from './ParkingInfo';
import { Observable, observable } from 'rxjs';
import { HttpClient }  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ParkingService {


  constructor( private httpClient:  HttpClient) { }
  getParkings() : Observable<ParkingInfo[]>{
   /* let parking2:ParkingInfo={
      id :1,
    nom:"parking1",
     nbrePlaceDispo:45,
     nbrePlaceTot:145,
    status:"ABONNE",
     date:"25 Mars"
    }
    let parking3:ParkingInfo={
      id :1,
    nom:"parking2",
     nbrePlaceDispo:4,
     nbrePlaceTot:145,
    status:"FERME",
     date:"25 Mars"
    }
    let parkings=[];
    parkings.push(parking2);
    parkings.push(parking3);
    */
    return this.httpClient.get<ParkingInfo[]>('http://localhost:8080/api/parking');
    
    
  }
}


