import { Injectable } from '@angular/core';
import { Holiday } from './holiday/holiday.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//TODO: HIDE THIS KEY
const API_KEY: string = '078e4fefca86014243901cc2af31375c91940e1d';
const baseURL: string = 'https://calendarific.com/api/v2/holidays';
const country: string = 'US'; 

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  /* example url
  'https://calendarific.com/api/v2/holidays' + '?&api_key=' + API_KEY + '&country=' + country + '&year =2021' + '&month=' + month
  */
  month: string = '';

  constructor(private http: HttpClient) {

   }

  getHolidays(): Observable<any>{
    this.getCurrentMonth();
    const url: string = 'https://calendarific.com/api/v2/holidays' + '?&api_key=' + API_KEY + '&country=' + country + '&year=2021' + '&month=' + this.month;
    console.log(url);
    const data = this.http.get<any>(url);
    console.log(data);
    return data;
  }

  getHolidaysTest() {
    const data = [{name: "Holiday1", country: "Country1"},
    {name: "Holiday2", country: "Country2"},
    {name: "Holiday3", country: "Country3"}];
    return data;
  }

  getCurrentMonth(){
    this.month = (new Date().getMonth() + 1).toString();
  }
}
