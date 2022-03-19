import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Weather } from 'src/models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeatherData(){
    return this.http.get<Weather>("https://localhost:5001/WeatherForecast").pipe(
      map((response: Weather)=>{
          return response;
      })
    )
    // return this.http.get<Weather>("https://localhost:5001/WeatherForecast").pipe(
    //   map((response: Weather) => {
    //       const weather = response;
    //       if(weather)
    //       {
    //         return weather;
    //       }
    //       throw new Error('ff');
          
    //   })
    // )
  }
}
