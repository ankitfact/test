import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherServiceService } from 'services/weather-service.service';
import { Weather } from 'src/models/weather';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';
  weathres:Weather[] =[];

  constructor(private weatherService: WeatherServiceService)
  {
    
  }

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData()
  {
    this.weatherService.getWeatherData().subscribe(response =>{
      console.log(response);
    
    })
  }
}
