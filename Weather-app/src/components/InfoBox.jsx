import React from "react"
function InfoBox({info}) {
    return (
        <div className="container container2  d-flex justify-content-center align-items-center  " >
            <div className="card  text-center" >
                <img src="/image/img.jpg" className="card-img-top" alt="img not found" />
                <div className="card-body">
                    <h5 className="card-title text-2xl  text-col ">{info.city}</h5>
                    <h6 className="text-secondary" >  Temperature - {info.temp} &deg;C </h6>
                    <h6 className="text-secondary" >  Min-Temp - {info.tempMin} &deg;C </h6>
                    <h6 className="text-secondary" >  Max-Temp - {info.tempMax} &deg;C </h6>
                    <h6 className="text-secondary" >  Humidity - {info.humidity} %</h6>
                    <h4 className="font-bold  pt-1 pb-1" >Weather - {info.weather} </h4>
                    <h6 className="text-green-600 " >  The Weather feelslike is  - {info.feelsLike} &deg;C </h6>
                </div>
            </div>
        </div>
    )
}
export default InfoBox