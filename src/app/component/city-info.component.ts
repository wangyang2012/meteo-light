import {Component, Input} from '@angular/core';
import {CurrentCondition} from '../model/current-condition.model';
import {City} from '../model/city.model';

@Component({
    selector: 'app-city-info',
    templateUrl: './city-info.component.html',
    styleUrls: ['./city-info.component.scss']
})
export class CityInfoComponent {
    @Input()
    city: City;

}
