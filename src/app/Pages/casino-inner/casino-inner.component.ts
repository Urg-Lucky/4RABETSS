import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-casino-inner',
  templateUrl: './casino-inner.component.html',
  styleUrls: ['./casino-inner.component.css'],
})
export class CasinoInnerComponent implements OnInit {
  Values = sessionStorage.getItem('cat');
  allcatergroy: any;
  idrValue: any;
  ProviderName: any;
  gameid: any;
  category: any;
  constructor(private catergory: RegisterService) {}

  getcatergoy() {
    this.catergory.getallCatergory().subscribe((dat: any) => {
      this.allcatergroy = dat.data;
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
    this.getcatergoy();
    this.gameid();
  }
}
