import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css'],
})
export class SlotsComponent implements OnInit {
  getSlots: any;
  idrValue: any;
  ProviderName: any;
  category: any;

  constructor(private slots: RegisterService) {}

  getslotsgames() {
    this.slots.getSlots().subscribe((dat: any) => {
      this.getSlots = dat.data;
    });
  }
  getgamesid(gameid: any, providerid: any, category: any) {
    this.idrValue = gameid;
    this.ProviderName = providerid;
    this.category = category;
    localStorage.setItem('gameid', this.idrValue);
    localStorage.setItem('Providername', this.ProviderName);
    window.location.href = `http://localhost:4200/casino-page/${this.idrValue}/${this.ProviderName}`;
  }
  ngOnInit(): void {
    this.getslotsgames();
  }
}
