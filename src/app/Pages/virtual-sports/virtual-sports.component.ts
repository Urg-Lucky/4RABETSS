import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-virtual-sports',
  templateUrl: './virtual-sports.component.html',
  styleUrls: ['./virtual-sports.component.css'],
})
export class VirtualSportsComponent implements OnInit {
  getvirtuals: any;
  idrValue: any;
  ProviderName: any;
  category: any;
  constructor(private virtual: RegisterService) {}

  getVirtual() {
    this.virtual.getvirtualSports().subscribe((dat: any) => {
      this.getvirtuals = dat.data;
      console.log(dat);
    });
  }

  getgamesid(gameid: any, providerid: any, category: any) {
    this.idrValue = gameid;
    this.ProviderName = providerid;
    this.category = category;
    localStorage.setItem('gameid', this.idrValue);
    localStorage.setItem('Providername', this.ProviderName);
    localStorage.setItem('category', this.category);
    window.location.href = `http://localhost:4200/casino-page/${this.idrValue}/${this.ProviderName}`;
  }
  ngOnInit(): void {
    this.getVirtual();
  }
}
