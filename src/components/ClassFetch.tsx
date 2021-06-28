import React, {Component} from 'react';
import CurrentWeatherDisplay from './DisplayFunction'

type WeatherState={

    locationWeather: {
        main: {
            temp: string;
            feels_like: string;
            humidity: string
        },
        weather: {
            description: string
        },
        clouds:{
            all: number
        },
        wind:{
            speed: number
        }
    }
    currentLat: number;
    currentLong: number;
}

type Geolocation={
    coords: {
        latitude: number;
        longitude: number;
    }; 
}
export default class CurrentWeather extends Component<{}, WeatherState>{
    constructor(props: {}){
        super(props);
        this.state = { 
            locationWeather:{
                main:{
                    temp:'', feels_like:'', humidity:''
                },
                clouds:{
                    all: 1
                },
                wind:{
                    speed: 1
                },
                weather:{
                    description:''
                },
            }, 
            currentLat: 1, 
            currentLong: 2, 
            }
        this.success = this.success.bind(this)
    }
    success(pos: Geolocation) {
        console.log(pos);
        let crd = pos.coords;
        this.setState({currentLat: crd.latitude, currentLong: crd.longitude});
        console.log(this.state.currentLat, this.state.currentLong);
    }
    
    weatherFetch (){
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.currentLat}&lon=${this.state.currentLong}&units=imperial&appid=77ab991ac2fb4ddb2543b7c266820c48`
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then((resData) =>{
            this.setState({locationWeather: resData})
        })
        .then(()=>{console.log('location weather:', this.state.locationWeather)})
        .catch(err => console.log(err))
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.success);
        this.weatherFetch();
    }

    render(){
        return(
            <div>
            <CurrentWeatherDisplay locationWeather={this.state.locationWeather}/> 
            </div>
        )
    }
}