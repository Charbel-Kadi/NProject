import { Component, Input, Output, EventEmitter, OnInit, } from '@angular/core';
import { NbaService } from '../nba.service';
import { TransformPipe } from '../transform.pipe';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})
export class PlayersComponent implements OnInit {
   players: any[] = [];
  newPlayer: any = {firstName: '', lastName: ''};
constructor(private nbaService: NbaService){}

addPlayer(): void{
  this.nbaService.addPlayer(this.newPlayer).subscribe(player => {
    console.log('Player added:', player);
    this.players.push({
      firstName: this.newPlayer.firstName, lastName: this.newPlayer.lastName
    });
    this.newPlayer = {firstName: '', lastName: ''};
  });
}

ngOnInit(): void {
  this.nbaService.getPlayers().subscribe(data => {this.players = data.league.standard;});
}

}
