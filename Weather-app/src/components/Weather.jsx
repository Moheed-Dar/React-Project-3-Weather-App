import Box from "./Box"
import InfoBox from "./InfoBox"
import {useState} from 'react'
function Weather(){
    let [weatherInfo,setWeatherInfo] = useState({
        weather: "hase",
        temp: 30.4,
        tempMin:30.5,
        tempMax:33,
        feelsLike:20,
        humidity:45,
        city:"peshawar"
    })
    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo)
    }
    return(
        <div>
        <Box updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
        </div>
    )
}
export default Weather