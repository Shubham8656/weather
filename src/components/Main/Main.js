import Axios from 'axios';
import React from 'react';
import './Main.css';
import image1 from '../image/bg2.jpg';
import image2 from '../image/bg1.jpg';
import image3 from '../image/6.webp';
import image4 from '../image/4.jpg';

class Main extends React.Component{
    constructor(){
        super()
        this.state={
            weather:[],
            city:'solapur',
            date:'',
            environment:'',
            temp:'',
            humidity:'',
            wind_speed:'',
            api_key:'5f5e240423dd937ab7d37ada456caa70',
            lang:'en'
        }
    }
    
    componentDidMount(){
        // Taking data from weather api
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.state.api_key}&lang=${this.state.lang}`)
        .then((res)=>{
            this.setState({
                ...this.state,
                city:res.data.name,
                date:new Date().toDateString(),
                environment:res.data.weather[0].description,
                temp:Math.ceil(res.data.main.feels_like)-273,
                humidity:res.data.main.humidity,
                wind_speed:res.data.wind.speed
            })
        })
        .catch((e)=>console.log(e))  
    }
    handler=()=>{
        let x= document.getElementById('select').value
        console.log(x)
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=${this.state.api_key}&lang=${this.state.lang}`)
        .then((res)=>{    
            console.log(res)
            this.setState({
                ...this.state,
                city:res.data.name,
                date:new Date().toDateString(),
                environment:res.data.weather[0].description,
                temp:Math.ceil(res.data.main.feels_like)-273,
                humidity:res.data.main.humidity,
                wind_speed:res.data.wind.speed
            })
        })
        .catch((e)=>console.log(e))
    
    }
    englishHandler=()=>{
        this.setState({
            ...this.state,
            lang:'en'
        })
        let x= document.getElementById('select').value
        console.log(x)
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=${this.state.api_key}&lang=en`)
        .then((res)=>{    
            this.setState({
                ...this.state,
                city:res.data.name,
                date:new Date().toDateString(),
                environment:res.data.weather[0].description,
                temp:Math.ceil(res.data.main.feels_like)-273,
                humidity:res.data.main.humidity,
                wind_speed:res.data.wind.speed
            })
        })
        .catch((e)=>console.log(e))
    
        console.log('english',this.state.lang)
    }
    hindiHandler=()=>{
        this.setState({
            ...this.state,
            lang:'hi'
        })
        console.log('hindi',this.state.lang)
        let x= document.getElementById('select').value
        console.log(x)
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=${this.state.api_key}&lang=hi`)
        .then((res)=>{   
            console.log(res) 
            this.setState({
                ...this.state,
                city:res.data.name,
                date:new Date().toDateString(),
                environment:res.data.weather[0].description,
                temp:Math.ceil(res.data.main.feels_like)-273,
                humidity:res.data.main.humidity,
                wind_speed:res.data.wind.speed
            })
        })
        .catch((e)=>console.log(e))
    }
    backgroundHandler=()=>{
        console.log('background change')
       let random = Math.floor((Math.random() * 4) + 1);
       if(random===1){ document.body.style.backgroundImage=`url(${image1})`;}
       if(random===2){ document.body.style.backgroundImage=`url(${image2})`;}
       if(random===3){ document.body.style.backgroundImage=`url(${image3})`;}
       if(random===4){ document.body.style.backgroundImage=`url(${image4})`;}
}
    render(){
    return( 
        <div className='main'>        
            <select id='select' onClick={this.handler}>
            {/* <option selected>Choose</option> */}
                <option value='Solapur'>Solapur</option>
                <option value='Pune'>Pune</option>
                <option value='Mumbai'>Mumbai</option>
                <option value='Bengaluru'>Bengaluru</option>
                <option value='Nashik'>Nashik</option>
                <option value='Kolhapur'>Kolhapur</option>
                <option value='Delhi'>Delhi</option> 
                <option value='Hydrabad'>Hyderabad</option>
                <option value='Barshi'>Barshi</option>
                <option value='Nagpur'>Nagpur</option>
                <option value='Aurangabad'>Aurangabad</option>
                <option value='Thane'>Thane</option>
                <option value='Dhule'>Dhule</option>
                <option value='Satara'>Satara</option>
                <option value='Sangli'>Sangli</option>
            </select>
            {/* <input id='submit' type='submit' onClick={this.handler}></input> */}
            <div id='city'>{this.state.city}</div>
            <div id='date'>{this.state.date}</div>
            <div id='environment'>{this.state.environment}</div>
            <div id='temp'>{this.state.temp}{'\u00B0'}C</div>
            <div id='humidity'>Humidity:{this.state.humidity}%</div>
            <div id='speed'>Wind Speed:{this.state.wind_speed}m/s</div>
            <button id='english' onClick={this.englishHandler}>English</button>
            <button id='hindi' onClick={this.hindiHandler}>Hindi</button>
            {/* <div>{this.state.temp}</div> */}
            <button id='background' onClick={this.backgroundHandler}>Change Baackgrround</button>
        </div>
    );
 }
}
export default Main;