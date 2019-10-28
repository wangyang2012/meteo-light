import {Component, Input, OnInit} from '@angular/core';
import {PrevisionService} from '../services/prevision.service';
import {Prevision} from '../model/prevision.model';

@Component({
    selector: 'app-search-city',
    templateUrl: './search-city.component.html',
    styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

    @Input()
    city: string;

    constructor(private previsionService: PrevisionService) {
    }

  ngOnInit(): void {

    this.previsionService.getPrevision('sucy-en-brie').subscribe(data => {
      this.prevision = data;
    });
  }
}
