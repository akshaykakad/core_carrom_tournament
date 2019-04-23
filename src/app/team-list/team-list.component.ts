import { Component, OnInit } from '@angular/core';
import { Team } from 'src/Team';
import{TeamDataService} from '../team-data.service';
import { Teams } from 'src/Teams';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  selectedTeam:Team;
  teams: Team[];

  constructor(private teamService: TeamDataService) {
   }


  ngOnInit() {
    this.getTeams();
  }

  selectTeam(id : number):void{
    //this.selectedTeam = 
    this.teamService.getSelectedTeam(id).subscribe(team => this.selectedTeam = team);
  }

  getTeams():void{
    //this.teams = 
    this.teamService.getTeamList().subscribe(teams => this.teams = teams);
  }

}
