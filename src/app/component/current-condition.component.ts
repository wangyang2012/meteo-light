import {Component, Input} from '@angular/core';
import {CurrentCondition} from '../model/current-condition.model';

@Component({
    selector: 'app-current-condition',
    templateUrl: './current-condition.component.html',
    styleUrls: ['./current-condition.component.scss']
})
export class CurrentConditionComponent {
    @Input()
    currentCondition: CurrentCondition;

}
