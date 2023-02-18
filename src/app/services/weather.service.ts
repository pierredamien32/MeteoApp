import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { weatherData } from '../models/weather.models';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  public getWeatherData(cityName: string): Observable<weatherData>{
    return this.http.get<weatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=025dfd9f699091b913daa8ce4a3548bb&units=metric&lang=fr`, {
      headers: new HttpHeaders()
    });
  }
}
