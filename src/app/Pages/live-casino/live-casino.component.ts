import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-live-casino',
  templateUrl: './live-casino.component.html',
  styleUrls: ['./live-casino.component.css'],
})
export class LiveCasinoComponent implements OnInit {
  Livecasino: any;
  idrValue: any;
  ProviderName: any;
  category: any;
  constructor(
    private livecasnio: RegisterService,
    private router: ActivatedRoute
  ) {}

  getLivecasnio() {
    this.livecasnio.getLiveCasnio().subscribe((dat: any) => {
      this.Livecasino = dat.data;
      console.log(dat);
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
    this.getLivecasnio();

    this.router.paramMap.subscribe((parma: any) => {
      this.idrValue = parma.params.id;
    });
  }
}
