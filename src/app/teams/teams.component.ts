import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { NbaService } from '../nba.service';
import { PlayersComponent } from '../players/players.component';
import { TransformPipe } from '../transform.pipe';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent{
 @Input() teams: any[] = [];
 @Output() selectTeam = new EventEmitter<string>();

  constructor(private NbaService: NbaService){}

  onSelect(team: string): void{
    this.selectTeam.emit(team);
  }
  
  


  

}
