import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { SignupComponent } from './sharepages/signup/signup.component';
import { SigninComponent } from './sharepages/signin/signin.component';
import { CasinoComponent } from './Pages/casino/casino.component';
import { register } from 'swiper/element/bundle';
import { LeftasideComponent } from './sharepages/leftaside/leftaside.component';
import { RightasideComponent } from './sharepages/rightaside/rightaside.component';
import { InplayComponent } from './Pages/inplay/inplay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SportsComponent } from './Pages/sports/sports.component';
import { CricketComponent } from './Pages/cricket/cricket.component';
import { FootballComponent } from './Pages/football/football.component';
import { TennisComponent } from './Pages/tennis/tennis.component';
import { CasinoInnerComponent } from './Pages/casino-inner/casino-inner.component';
import { CasinoLeftasideComponent } from './sharepages/casino-leftaside/casino-leftaside.component';
import { CasinoSliderComponent } from './sharepages/casino-slider/casino-slider.component';
import { LiveCasinoComponent } from './Pages/live-casino/live-casino.component';
import { VirtualSportsComponent } from './Pages/virtual-sports/virtual-sports.component';
import { MatkaComponent } from './Pages/matka/matka.component';
import { MatkaDetailsComponent } from './Pages/matka-details/matka-details.component';
import { GameDetailsComponent } from './Pages/game-details/game-details.component';
import { GamesframeComponent } from './Pages/gamesframe/gamesframe.component';
import { SlotsComponent } from './Pages/slots/slots.component';
import { AccountStatementComponent } from './Pages/account-statement/account-statement.component';
import { ProfileSidebarComponent } from './sharepages/profile-sidebar/profile-sidebar.component';
import { ProfitLossComponent } from './Pages/profit-loss/profit-loss.component';
import { BetHistoryComponent } from './Pages/bet-history/bet-history.component';
import { DepositComponent } from './Pages/deposit/deposit.component';
import { WithdrawComponent } from './Pages/withdraw/withdraw.component';
import { ChangePasswordComponent } from './sharepages/change-password/change-password.component';
import { BottomNavComponent } from './sharepages/bottom-nav/bottom-nav.component';
register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    CasinoComponent,
    LeftasideComponent,
    RightasideComponent,
    InplayComponent,
    SportsComponent,
    CricketComponent,
    FootballComponent,
    TennisComponent,
    CasinoInnerComponent,
    CasinoLeftasideComponent,
    CasinoSliderComponent,
    LiveCasinoComponent,
    VirtualSportsComponent,
    MatkaComponent,
    MatkaDetailsComponent,
    GameDetailsComponent,
    GamesframeComponent,
    SlotsComponent,
    AccountStatementComponent,
    ProfileSidebarComponent,
    ProfitLossComponent,
    BetHistoryComponent,
    DepositComponent,
    WithdrawComponent,
    ChangePasswordComponent,
    BottomNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
