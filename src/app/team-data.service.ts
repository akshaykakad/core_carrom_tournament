import { Injectable } from '@angular/core';
import {Teams} from '../Teams';
import { Team } from 'src/Team';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {

  constructor() { }

  getTeamList():Observable<Team[]>{
    return of(Teams);
  }

  getSelectedTeam(id : number):Observable<Team>{
    return of(Teams.find(team => team.id === id));
  }
  
}
