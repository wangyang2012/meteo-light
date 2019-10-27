import {Component, Input} from '@angular/core';
import {DateData} from '../model/date-data.model';

@Component({
    selector: 'app-day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.scss']
})
export class DayComponent {
  @Input()
  day: DateData;
}
