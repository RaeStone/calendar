import { Component, OnInit } from '@angular/core';
import { Holiday } from './holiday.model';
import { HolidayService } from '../holiday.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  holidays: Holiday[] = [];
  day = new Date().getDate();
  errorcode: string = "Did not receive correct API response";
  error: boolean = false;

  constructor(private holidayService: HolidayService) { 

  }

  ngOnInit(): void {

    this.holidayService.getHolidays().subscribe(payload => {
      //TODO: ERROR CHECKING
      const code = payload.meta.code;
      if (code != 200){
        this.error = true;
      }
      else{
        const data = payload.response.holidays;
        let manipulatedData = [];
        let len = data.length;
        for (let i = 1; i < len; i++){
          let holidayDay = data[i].date.datetime.day;
          //removes duplicate holidays and any holidays that have already passed
          if ((data[i].name != data[i-1].name) && (holidayDay >= this.day)) {
            manipulatedData.push(data[i]);
          }
        }
        this.holidays = manipulatedData;
      }
    })
  }

}
