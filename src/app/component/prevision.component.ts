import {Component, OnInit} from '@angular/core';
import {PrevisionService} from '../services/prevision.service';
import {Prevision} from '../model/prevision.model';

@Component({
    selector: 'app-prevision',
    templateUrl: './prevision.component.html',
    styleUrls: ['./prevision.component.scss']
})
export class PrevisionComponent implements OnInit {

    prevision: Prevision;

    constructor(private previsionService: PrevisionService) {
    }

  ngOnInit(): void {

    this.previsionService.getPrevision('sucy-en-brie').subscribe(data => {
      this.prevision = data;
      for (let [key, value] of this.prevision.fcst_day_0.hourly_data) {
        console.log(key);
      }

    });
  }
}
