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

  constructor(private holidayService: HolidayService) { }

  ngOnInit(): void {

    this.holidayService.getHolidays().subscribe(payload => {
      //TODO: MANAGE DATA
      //possibly prune holidays that have already passed?
      this.holidays = payload;
      console.log(payload);
    })
  }

}
