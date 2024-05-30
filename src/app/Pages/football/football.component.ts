import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css'],
})
export class FootballComponent implements OnInit {
  getscooer: any;
  getrunnerprice: any;
  getrunnerpricelay: any;
  Runner: any;
  StartDates: any;
  combinedData: any[] = [];
  Message: any;
  combinedDataBack: any[] = [];
  constructor(private getsoccer: RegisterService) {}

  // getScooerdetails() {
  //   this.getsoccer.getSoccer().subscribe((dat: any) => {

  //     this.Message = dat.message;
  //     console.log(this.Message);
  //     this.getscooer = dat.data.UpCommingMatches;
  //     this.getrunnerprice =
  //       dat.data.UpCommingMatches[0].runner_json[0].ex.availableToBack;

  //     this.getrunnerpricelay =
  //       dat.data.UpCommingMatches[0].runner_json[0].ex.availableToLay;

  //     this.Runner = dat.data.UpCommingMatches[0].runner_json.map(
  //       (runner: any) => runner.selectionId
  //     );
  //     this.StartDates = dat.data.UpCommingMatches.map(
  //       (match: any) => match.start_date
  //     );

  //     this.combineData();
  //     this.combineDataBack();
  //   });
  // }
  getScooerdetails() {
    this.getsoccer.getSoccer().subscribe(
      (dat: any) => {
        if (dat && dat.message) {
          this.Message = dat.message;
         

          if (
            dat.data &&
            dat.data.UpCommingMatches &&
            dat.data.UpCommingMatches.length > 0
          ) {
            this.getscooer = dat.data.UpCommingMatches;
            this.getrunnerprice =
              dat.data.UpCommingMatches[0].runner_json[0].ex.availableToBack;

            this.getrunnerpricelay =
              dat.data.UpCommingMatches[0].runner_json[0].ex.availableToLay;

            this.Runner = dat.data.UpCommingMatches[0].runner_json.map(
              (runner: any) => runner.selectionId
            );
            this.StartDates = dat.data.UpCommingMatches.map(
              (match: any) => match.start_date
            );

            this.combineData();
            this.combineDataBack();
          } else {
            // Swal.fire('No upcoming matches found.', '', 'warning');
            Swal.fire(
              'Please wait real-time records coming soon.',
              '',
              'warning'
            );
          }
        } else {
          Swal.fire(
            'Please wait real-time records coming soon.',
            '',
            'warning'
          );
        }
      },
      (error) => {
        Swal.fire('Error fetching soccer details.', '', 'error');
        console.error('Error:', error);
      }
    );
  }

  combineData() {
    this.combinedData = this.getrunnerpricelay.map(
      (available: any, index: number) => ({
        available,
        id: this.Runner[index],
      })
    );
  }

  combineDataBack() {
    this.combinedDataBack = this.getrunnerprice.map(
      (available: any, index: number) => ({
        available,
        id: this.Runner[index],
      })
    );
  }

  getmarket(
    market_id: any,
    match_id: any,
    sport_id: any,
    selectionId: any,
    price: any
  ) {
    sessionStorage.setItem('market_id', market_id);
    sessionStorage.setItem('match_id', match_id);
    sessionStorage.setItem('sport_id', sport_id);
    sessionStorage.setItem('selectionId', selectionId);
    sessionStorage.setItem('price', price);
    sessionStorage.setItem('football', '0');
    window.location.href = 'http://localhost:4200/game-details';
  }

  ngOnInit(): void {
    this.getScooerdetails();
  }
}
