import {useState} from 'react'

function Box({updateInfo}) {
    let [city,setCity] =useState("");
    let API_URL ="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY ="87b71b9d66fd90442a016bba143708c8";
    let getWeatherInfo = async ()=>{
        let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse)
        let result ={
            city:city,
            feelsLike:jsonResponse.main.feels_like,
            humidity:jsonResponse.main.humidity,
            temp:jsonResponse.main.temp,
            tempMax:jsonResponse.main.temp_max,
            tempMin:jsonResponse.main.temp_min,
            weather:jsonResponse.weather[0].description
        }
        console.log(result)
        return result;
    }
    let handleChange = (e) =>{
        setCity(e.target.value);
    }
    let handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(city); 
        setCity("");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo)
    }
    return (
        <div className="container container1 d-flex  justify-content-center align-items-center  ">
            <div className="card card1 shadow  p-3" style={{ width: '100%', maxWidth: '320px' }}>
                <div className="  ">
                    <h1 className='text-2xl text-center text-yellow-400' >Search for the Weather</h1>
                </div>
                <form  onSubmit={handleSubmit} >
                    <div className="mb-3 text-center">
                        
                        <label htmlFor="exampleInput" className="form-label mt-2 mb-2 "><h1 className='text-center text-3xl text-green-400' >Enter the location</h1></label>
                        <input type="text"  className="form-control hover:shadow-md hover:shadow-black " id="exampleInput" value={city} onChange={handleChange} placeholder="Enter here" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn  w-28 btn-primary">Submit</button>
                    </div>
                </form>
            </div>
           
        </div>
        
    )
}

export default Box
