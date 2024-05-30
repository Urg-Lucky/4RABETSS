import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RegisterService } from 'src/app/services/register.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  GameDatils!: FormGroup;
  stack: any = new FormControl(null, Validators.required);
  isActive: boolean = false;
  gteBit: any;
  getCricket: any;
  getrunnerprice: any;
  getrunnerpricelay: any;
  Runner: any;
  combinedData: any[] = [];
  combinedDataBack: any[] = [];
  startDates: any;
  getdate: any;
  Name: any;
  Price: any;
  Priceone: any;
  Error: any;
  constructor(
    private crickrtbet: RegisterService,
    private cricket: RegisterService,
    private sanitizer: DomSanitizer,
    private datePipe: DatePipe,
    private bet: RegisterService
  ) {}

  getCrickets() {
    this.cricket.getSinglecriket().subscribe((dat: any) => {
      this.getCricket = dat.data.odds.runner_json;
      this.getdate = dat.data.others;
      // console.log(this.getdate);

      this.getrunnerprice = dat.data.odds.runner_json[0].ex.availableToBack;
      // console.log(this.getrunnerprice);
      this.getrunnerpricelay = dat.data.odds.runner_json[0].ex.availableToLay;

      this.Runner = dat.data.odds.runner_json.map(
        (runner: any) => runner.selectionId
      );

      this.combineData();
      this.combineDataBack();
      this.extractStartDates();
    });
  }

  gettennsis() {
    this.cricket.gettennissinglebet().subscribe((dat: any) => {
      this.getCricket = dat.data.odds.runner_json;
      this.getdate = dat.data.others;
      // console.log(this.getdate);

      this.getrunnerprice = dat.data.odds.runner_json[0].ex.availableToBack;
      // console.log(this.getrunnerprice);
      this.getrunnerpricelay = dat.data.odds.runner_json[0].ex.availableToLay;

      this.Runner = dat.data.odds.runner_json.map(
        (runner: any) => runner.selectionId
      );

      this.combineData();
      this.combineDataBack();
      this.extractStartDates();
    });
  }

  extractStartDates() {
    this.startDates = this.getdate.map((cricket: { start_date: number }) => {
      const date = new Date(cricket.start_date * 1000);

      return this.datePipe.transform(date, 'MMM d, y, h:mm a');
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
  ngOnInit(): void {
    this.GameDatils = new FormGroup({
      stack: this.stack,
    });
    // this.getbitData();
    this.getCrickets();
  }

  toggleSidebar(): void {
    this.isActive = !this.isActive;
  }
  gamedetils(name: any, price: any) {
    this.Name = name;
    this.Price = price;
  }

  Priceadd() {
    const stakeButton = document.getElementById(
      'stakeButton'
    ) as HTMLButtonElement;

    const handleButtonClick = () => {
      // Get the text content of the stakeButton
      const priceText = stakeButton.textContent;

      // Attempt to parse the text content as an integer
      this.Priceone = parseInt(priceText || '0', 10);

      // Check if the parsed value is a number, if not, set it to 0
      if (isNaN(this.Priceone)) {
        this.Priceone = 0;
      }

      // Store the value in sessionStorage
      sessionStorage.setItem('first-price', this.Priceone.toString());

      // Update the stack's value
      this.stack.setValue(this.Priceone);
    };

    // Add the event listener to the stakeButton
    stakeButton.addEventListener('click', handleButtonClick);
  }

  PriceaddTwo() {
    const stakeButton = document.getElementById(
      'stakeButton1'
    ) as HTMLButtonElement;

    const handleButtonClick = () => {
      this.Priceone = parseInt(stakeButton.textContent || '0', 10);
      this.stack.setValue(this.Priceone);
    };
    stakeButton.addEventListener('click', handleButtonClick);
  }

  PriceaddThree() {
    const stakeButton = document.getElementById(
      'stakeButton2'
    ) as HTMLButtonElement;

    const handleButtonClick = () => {
      this.Priceone = parseInt(stakeButton.textContent || '0', 10);
      this.stack.setValue(this.Priceone);
    };
    stakeButton.addEventListener('click', handleButtonClick);
  }

  Priceaddfour() {
    const stakeButton = document.getElementById(
      'stakeButton3'
    ) as HTMLButtonElement;

    const handleButtonClick = () => {
      this.Priceone = parseInt(stakeButton.textContent || '0', 10);
      this.stack.setValue(this.Priceone);
    };
    stakeButton.addEventListener('click', handleButtonClick);
  }

  Priceaddfive() {
    const stakeButton = document.getElementById(
      'stakeButton4'
    ) as HTMLButtonElement;

    const handleButtonClick = () => {
      this.Priceone = parseInt(stakeButton.textContent || '0', 10);
      this.stack.setValue(this.Priceone);
    };
    stakeButton.addEventListener('click', handleButtonClick);
  }

  onSubmit() {
    this.bet.getcricketsinglebet().subscribe((dat: any) => {
      this.Error = dat.error;
      if (this.Error == true) {
        Swal.fire(dat.message, '', 'error');
      } else {
        this.stack.reset();
        Swal.fire(dat.message, '', 'success');
      }
    });
  }
  clearBet() {
    this.stack.reset();
  }
}
