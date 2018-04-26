import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CharacterFormDto } from '../../../model/types';
import { SingleCharacterFormActions } from '../../../store/actions/single-character-form.actions';
import { SingleCharacterActions } from '../../../store/actions/single-character.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/audit';
import { ActivatedRoute } from '@angular/router';
import { ApiRequestService } from '../../../services/api-request.service';
import { UserInfoService } from '../../../services/user-info.service';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCreateComponent implements OnInit {

  @select() characterForm$: Observable<CharacterFormDto>;

  scenarioId: number;

  constructor(
    private userInfo: UserInfoService,
    private singleCharacterActions: SingleCharacterActions,
    private formActions: SingleCharacterFormActions,
    private route: ActivatedRoute
  ) {
  }

  onSubmit() {
    this.characterForm$.subscribe(characterDto => {
      characterDto.scenario = ApiRequestService.RESOURCE_SERVER_ADDRESS + '/scenarios/' + this.scenarioId;
      characterDto.owner = this.userInfo.getCurrentUser()._links.self.href;

      this.singleCharacterActions.createCharacter(characterDto);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.scenarioId = +params['scenario_id']);
    this.formActions.populateCharacterForm({
      name: '',
      player: '',
      description: '',
      experience: 0
    });
  }

}
