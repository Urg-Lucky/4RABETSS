import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { RegisterService } from 'src/app/services/register.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css'],
})
export class CasinoComponent implements OnInit {
  Imagescasin: any;
  Lighting: any;
  LIveCasino: any;
  teenpati: any;
  andarbhar: any;
  dargrongames: any;
  barccat: any;
  blackjack: any;
  tablegames: any;
  pokergames: any;
  holdems: any;
  idrValue: any;
  ProviderName: any;
  gameid: any;
  provider: any;
  categoryr = 'category';
  limit = 1000;
  category: any;
  Caterginame = 'roulette';
  constructor(
    private getroutelate: RegisterService,
    private getlighting: RegisterService,
    private livecasino: RegisterService,
    private teenpatti: RegisterService,
    private andarbhargame: RegisterService,
    private dargon: RegisterService,
    private barccats: RegisterService,
    private blackjacka: RegisterService,
    private tablegame: RegisterService,
    private poker: RegisterService,
    private router: ActivatedRoute,
    private holdem: RegisterService
  ) {}

  getCasinoRoute() {
    this.getroutelate.getRoulete().subscribe(
      (dat: any) => {
        this.Imagescasin = dat.data.slice(0, 10);
      },
      (error) => {
        console.error('Error fetching casino route:', error);
      }
    );
  }

  getLighting() {
    this.getlighting.getLighting().subscribe(
      (dat: any) => {
        this.Lighting = dat.data;
      },
      (error) => {
        console.error('Error fetching casino route:', error);
      }
    );
  }

  getliveCasino() {
    this.livecasino.getLiveCasnio().subscribe(
      (dat: any) => {
        this.LIveCasino = dat.data.slice(0, 10);
      },
      (error) => {
        console.error('Error fetching casino route:', error);
      }
    );
  }

  getTeenPatti() {
    this.teenpatti.getTeenPatti().subscribe(
      (dat: any) => {
        this.teenpati = dat.data.slice(0, 10);
      },
      (error) => {
        console.log('Error fetching casino route:', error);
      }
    );
  }

  getAndarBhar() {
    this.andarbhargame.getAndar().subscribe(
      (dat: any) => {
        this.andarbhar = dat.data.slice(0, 10);
      },
      (error) => {
        console.log('Error fetching casino route:', error);
      }
    );
  }

  getdargon() {
    this.dargon.getDargron().subscribe(
      (dat: any) => {
        this.dargrongames = dat.data.slice(0, 10);
      },
      (error) => {
        console.log('Error fetching casino route:', error);
      }
    );
  }

  getBarcat() {
    this.barccats.getbaccarat().subscribe(
      (dat: any) => {
        this.barccat = dat.data.slice(0, 10);
      },
      (error) => {
        console.log('Error fetching casnio route:', error);
      }
    );
  }

  getBlackjack() {
    this.blackjacka.getblackjack().subscribe(
      (dat: any) => {
        this.blackjack = dat.data.slice(0, 10);
      },
      (error) => {
        console.log('Error fetching casnio route:', error);
      }
    );
  }

  gettablegames() {
    this.tablegame.gettablegames().subscribe(
      (dat: any) => {
        this.tablegames = dat.data.slice(0, 10);
      },
      (error) => {
        console.log('Error feching casino route:', error);
      }
    );
  }

  getPoker() {
    this.poker.getpoker().subscribe(
      (dat: any) => {
        this.pokergames = dat.data.slice(0, 10);
      },
      (error) => {
        console.log('Error feching casino route:', error);
      }
    );
  }

  getholdems() {
    this.holdem.getholdem().subscribe(
      (dat: any) => {
        this.holdems = dat.data.slice(0, 10);
      },
      (error) => {
        console.log('Error feching casino route:', error);
      }
    );
  }
  ngOnInit(): void {
    this.getCasinoRoute();
    this.getLighting();
    this.getTeenPatti();
    this.getliveCasino();
    this.getAndarBhar();
    this.getdargon();
    this.getBarcat();
    this.getBlackjack();
    this.gettablegames();
    this.getPoker();
    this.getholdems();

    this.router.paramMap.subscribe((parma: any) => {
      this.idrValue = parma.params.id;
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
  getgamesall(game: any) {
    console.log(game);
    sessionStorage.setItem('cat', game);

    window.location.href = `http://localhost:4200/casino/casino-inner`;
  }
}
