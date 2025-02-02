import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css'],
})
export class CricketComponent implements OnInit {
  getCricket: any;
  getrunnerprice: any;
  getrunnerpricelay: any;
  Runner: any;
  getdate: any;
  startDates: any;
  StartDates: any;
  combinedData: any[] = [];
  combinedDataBack: any[] = [];

  constructor(private cricket: RegisterService, private datePipe: DatePipe) {}

  getCrickets() {
    this.cricket.getcricket().subscribe((dat: any) => {
      this.getCricket = dat.data.UpCommingMatches;
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
      this.extractStartDates();
    });
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

    window.location.href = 'http://localhost:4200/game-details';
  }

  extractStartDates() {
    this.StartDates = this.StartDates.map((timestamp: number) => {
      const date = new Date(timestamp * 1000);
      return this.datePipe.transform(date, 'MMM d, y, h:mm a');
    });
  }

  ngOnInit(): void {
    this.getCrickets();
  }
}
