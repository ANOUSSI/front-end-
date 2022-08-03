import { Component, OnInit } from '@angular/core';
import { ParkingInfo } from '../ParkingInfo';
import { ParkingService } from '../parking.service';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit {
 parkings: ParkingInfo[] = [];
  constructor(private ParkingService:ParkingService) {

  }

  ngOnInit(): void {

    this.ParkingService.getParkings().subscribe(
      reponse => {
        this.parkings = reponse;
      }
    );
   
  }

  calcul(parking:ParkingInfo){
    if(parking.status=="OUVERT"){
      return {color:'green'}
    }
    else{
      return {color:'orange'}
    }
  }
}
