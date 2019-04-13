import { Component } from '@angular/core';
import {Team} from '../Team';
import {Teams} from '../Teams';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CORE CARROM TOURNAMENT';
  team:Team = {id: 1, name:'AllStar', member_1:'Sandeep', member_2:'Akshay'};
  selectedTeam:Team;
  teams: Team[] = Teams;

  selectTeam(id : number):void{
    this.selectedTeam = Teams.find(team => team.id === id);
  }
}
