import axios from "axios"
import { useEffect, useState } from "react"
import { options2 } from "../constants"
import Loader from "./Loader"
import PlaneSlider from "./PlaneSlider"
import { useDispatch } from "react-redux"
import { setPath } from "../redux/slices/flightSlice"

const DetailModal = ({ closeModal, detailId }) => {
    const [detail, setDetail] = useState(null)
    const dispatch= useDispatch()

    useEffect(() => {
        setDetail(null)
        axios.get(`https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`, options2)
            .then((res) => {
                dispatch(setPath(res.data.trail))
                setDetail(res.data)
            })
             
            .catch((err) => console.log(err))
    }, [detailId])

    return (
        <div className='detail-outer'>
            <div className="detail-inner">
                <p className='close-area'>
                    <span onClick={closeModal}>X</span>
                </p>
                {!detail ? 
                (<Loader />)
                : !detail.airport.destination || !detail.airport.origin ? (<p className="warn">Bu uçuş verileri gizlidir</p>) : (
                    <>
                        <h2>{detail.aircraft.model.text}</h2>
                        <h2>{detail.aircraft.model.code}</h2>
                        <p>
                            <span>Kuyruk Kodu:</span>
                            <span className="text-white"> {detail.aircraft.registration}</span>
                        </p>
                        <PlaneSlider images={detail.aircraft.images?.large} />

                        <p>
                            <span>Şirket</span>
                            <span>{detail.airline.short}</span>
                        </p>
                        <p>
                            <span>Kalkış:</span>
                            <a target="_blank" href={detail.airport.origin?.website}>{detail.airport.origin.name}</a>
                        </p>
                        <p>
                            <span>İniş:</span>
                            <a target="_blank" href={detail.airport.destination?.website}>{detail.airport.destination?.name}</a>
                        </p>

                        <p className={`status ${detail.status.icon}`} >{detail.status.text}</p>

                    </>)
                }
            </div>
        </div>
    )
}

export default DetailModal