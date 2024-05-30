import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CasinoComponent } from './Pages/casino/casino.component';
import { InplayComponent } from './Pages/inplay/inplay.component';
import { SportsComponent } from './Pages/sports/sports.component';
import { CricketComponent } from './Pages/cricket/cricket.component';
import { FootballComponent } from './Pages/football/football.component';
import { TennisComponent } from './Pages/tennis/tennis.component';
import { CasinoInnerComponent } from './Pages/casino-inner/casino-inner.component';
import { VirtualSportsComponent } from './Pages/virtual-sports/virtual-sports.component';
import { LiveCasinoComponent } from './Pages/live-casino/live-casino.component';
import { MatkaComponent } from './Pages/matka/matka.component';
import { MatkaDetailsComponent } from './Pages/matka-details/matka-details.component';
import { GameDetailsComponent } from './Pages/game-details/game-details.component';
import { GamesframeComponent } from './Pages/gamesframe/gamesframe.component';
import { SlotsComponent } from './Pages/slots/slots.component';
import { AccountStatementComponent } from './Pages/account-statement/account-statement.component';
import { ProfitLossComponent } from './Pages/profit-loss/profit-loss.component';
import { BetHistoryComponent } from './Pages/bet-history/bet-history.component';
import { DepositComponent } from './Pages/deposit/deposit.component';
import { WithdrawComponent } from './Pages/withdraw/withdraw.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'casino', component: CasinoComponent },
  { path: 'inplay', component: InplayComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'sports/cricket', component: CricketComponent },
  { path: 'sports/soccer', component: FootballComponent },
  { path: 'sports/tennis', component: TennisComponent },
  { path: 'casino/casino-inner', component: CasinoInnerComponent },
  { path: 'virtual-sports', component: VirtualSportsComponent },
  { path: 'live-casino', component: LiveCasinoComponent },
  { path: 'matka', component: MatkaComponent },
  { path: 'matka-details', component: MatkaDetailsComponent },
  { path: 'game-details', component: GameDetailsComponent },
  // { path: 'casino-page', component: GamesframeComponent },
  // { path: 'casino-page/:id', component: GamesframeComponent },
  { path: 'casino-page/:id/:provider', component: GamesframeComponent },
  { path: 'slots', component: SlotsComponent },
  { path: 'account-statement', component: AccountStatementComponent },
  { path: 'profit-loss', component: ProfitLossComponent },
  { path: 'bet-history', component: BetHistoryComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
