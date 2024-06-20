import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { NbaService } from './nba.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [NbaService]
})
export class AppComponent {
  title = 'NbaApp';
  teams= [{name: 'Los Angeles Lakers'}, {name: 'Golden State Warriors'}, {name: 'Brooklyn Nets'}];
  constructor(private NbaService: NbaService){}

selectedTeam!: string;

onTeamSelect(team: string): void {
  this.selectedTeam = team;
}


}
