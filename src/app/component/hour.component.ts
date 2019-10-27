import {Component, Input} from '@angular/core';
import {HourData} from '../model/hour-data.model';

@Component({
    selector: 'app-hour',
    templateUrl: './hour.component.html',
    styleUrls: ['./hour.component.scss']
})
export class HourComponent {
  @Input()
  hour: HourData;
}
