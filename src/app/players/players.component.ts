import { Component, Input, Output, EventEmitter, OnInit, } from '@angular/core';
import { NbaService } from '../nba.service';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})
export class PlayersComponent implements OnInit {
  @Input() players: any[] = [];
  @Output() playerSelected = new EventEmitter<any>();
  newPlayer: any = {name: '', team: ''};
constructor(private nbaService: NbaService){}
selectPlayer(player: any): void{
  this.playerSelected.emit(player);
}

loadPlayers(): void{
  this.nbaService.getPlayers().subscribe(data => {this.players = data;});
}

addPlayer(): void{
  this.nbaService.addPlayer(this.newPlayer).subscribe(player => {this.players.push(player);
    this.newPlayer = {name: '', team: ''};
  });
}

ngOnInit(): void {
  this.loadPlayers();
}

}
