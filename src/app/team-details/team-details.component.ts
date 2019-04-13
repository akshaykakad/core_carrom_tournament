import { Component, OnInit , Input} from '@angular/core';
import { Team } from 'src/Team';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  @Input() selectedTeam: Team;

  constructor() { }

  ngOnInit() {
  }

}
