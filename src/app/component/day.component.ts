import {Component, Input, OnInit} from '@angular/core';
import {DateData} from '../model/date-data.model';

@Component({
    selector: 'app-day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
    @Input()
    day: DateData;

    ngOnInit(): void {
        let dayHourDataString = JSON.stringify(this.day.hourly_data)
            .replace('"0H00"', '"t0H00"')
            .replace('"1H00"', '"t1H00"')
            .replace('"2H00"', '"t2H00"')
            .replace('"3H00"', '"t3H00"')
            .replace('"4H00"', '"t4H00"')
            .replace('"5H00"', '"t5H00"')
            .replace('"6H00"', '"t6H00"')
            .replace('"7H00"', '"t7H00"')
            .replace('"8H00"', '"t8H00"')
            .replace('"9H00"', '"t9H00"')
            .replace('"10H00"', '"t10H00"')
            .replace('"11H00"', '"t11H00"')
            .replace('"12H00"', '"t12H00"')
            .replace('"13H00"', '"t13H00"')
            .replace('"14H00"', '"t14H00"')
            .replace('"15H00"', '"t15H00"')
            .replace('"16H00"', '"t16H00"')
            .replace('"17H00"', '"t17H00"')
            .replace('"18H00"', '"t18H00"')
            .replace('"19H00"', '"t19H00"')
            .replace('"20H00"', '"t20H00"')
            .replace('"21H00"', '"t21H00"')
            .replace('"22H00"', '"t22H00"')
            .replace('"23H00"', '"t23H00"')
        ;
        this.day.hourly_data = JSON.parse(dayHourDataString);
    }
}
