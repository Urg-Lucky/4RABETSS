import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gamesframe',
  templateUrl: './gamesframe.component.html',
  styleUrls: ['./gamesframe.component.css'],
})
export class GamesframeComponent implements OnInit {
  valueyoken = localStorage.getItem('logintoken');
  game_id: string | null = null;
  provider_name: string | null = null;

  iframsdata: SafeResourceUrl[] = []; // Initialize as an array of SafeResourceUrl
  constructor(
    private gamesdeat: RegisterService,
    private sanitizer: DomSanitizer,
    private router: ActivatedRoute
  ) {}

  gamesframe() {
    this.gamesdeat.getiframe().subscribe((dat: any) => {
      if (Array.isArray(dat.data)) {
        this.iframsdata = dat.data.map((url: string) =>
          this.sanitizer.bypassSecurityTrustResourceUrl(url)
        );
      } else {
        this.iframsdata = [
          this.sanitizer.bypassSecurityTrustResourceUrl(dat.data.url),
        ];
      }
    });
  }

  ngOnInit(): void {
    this.gamesframe();

    this.router.paramMap.subscribe((params) => {
      this.game_id = params.get('game_id');
      this.provider_name = params.get('provider_name');
      // console.log(this.game_id, this.provider_name);
    });
  }

  getgamesid(gameid: any, providerid: any) {
    this.game_id = gameid;
    this.provider_name = providerid;
    // console.log(this.game_id, this.provider_name);
  }
}
