import { Component, OnInit } from '@angular/core';
import { NbaService } from '../nba.service';
import { PlayersComponent } from '../players/players.component';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit{
  teams: any[] = [];
  selectedPlayer: any = null;

  constructor(private NbaService: NbaService){}

  ngOnInit(): void {
    this.NbaService.getPlayers().subscribe(data => {this.teams = data;});
    this.loadTeams();
  }

  OnPlayerSelected(player: any):void{
    this.selectedPlayer = player;
  }
  loadTeams(): void{
    this.NbaService.getTeams().subscribe(data => {this.teams = data;});
  }

}
