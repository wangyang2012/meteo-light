import {City} from './city.model';
import {CurrentCondition} from './current-condition.model';
import {DateData} from './date-data.model';

export class Prevision {
    city_info: City;
    current_condition: CurrentCondition;
    fcst_day_0: DateData;
    fcst_day_1: DateData;
    fcst_day_2: DateData;
    fcst_day_3: DateData;
    fcst_day_4: DateData;
};