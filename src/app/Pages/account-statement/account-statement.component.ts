import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AmmountapiService } from 'src/app/services/ammountapi.service';
@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css'],
})
export class AccountStatementComponent implements OnInit {
  Report!: FormGroup;
  selectcurrentdate: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  selectlastdate: any = this.lastdate.transform(new Date(), 'yyyy-MM-dd');
  from_date: any = new FormControl(null, Validators.required);
  to_date: any = new FormControl(null, Validators.required);
  StartDate: any;
  Lastdate: any;
  Reports: any;
  createdDates: any;

  constructor(
    private datePipe: DatePipe,
    private lastdate: DatePipe,
    private account: AmmountapiService
  ) {}

  datefunction() {}
  ngOnInit(): void {
    this.Report = new FormGroup({
      from_date: this.from_date,
      to_date: this.to_date,
    });
    //this.datefunction();
    const dateFromTimestamp = new Date(1716422400 * 1000);
    // console.log(dateFromTimestamp);
  }

  fetchReport() {
    const selectedDate = new Date(this.from_date.value);
    const selectedDates = new Date(this.to_date.value);

    this.StartDate = Math.floor(selectedDate.getTime() / 1000);
    this.Lastdate = Math.floor(selectedDates.getTime() / 1000);
    sessionStorage.setItem('StartDate', this.StartDate);
    sessionStorage.setItem('LastDate', this.Lastdate);

    this.account.getAccount().subscribe((dat: any) => {
      this.Reports = dat.data;
      this.extractCreatedDates();
    });
  }

  extractCreatedDates() {
    this.createdDates = this.Reports.map((report: { created_at: number }) => {
      const date = new Date(report.created_at * 1000); // Convert timestamp to milliseconds
      return this.datePipe.transform(date, 'MMM d, y, h:mm a');
    });
  }
}
