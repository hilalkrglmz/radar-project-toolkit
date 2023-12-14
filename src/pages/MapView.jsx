import { useDispatch, useSelector } from "react-redux"
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import { clearPath } from "../redux/slices/flightSlice";
import {icon}  from "leaflet"


const MapView = ({ openModal }) => {
  
  const dispatch = useDispatch()
  
  const state = useSelector((store) => store.flight)
  
  const limeOptions = { color: 'crimson' }

  const planeIcon = icon({
    iconUrl:'/plane-icon.png',
    iconSize: [25,25]
  })




  return (
    <div>
      <MapContainer
        center={[39.37407875799644, 33.66124039090809]}
        zoom={6}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {state.flights.map((flight) => (

          <Marker icon={planeIcon} position={[flight.lat, flight.lng]}>
            <Popup>
              <div className="popup">
                <span>Kod:{flight.code}</span>
                <button onClick={() => openModal(flight.id)}>Detay</button>
                <button onClick={() => dispatch(clearPath())}>Rotayı Temizle</button>
              </div>
            </Popup>
          </Marker>
        ))}

        <Polyline pathOptions={limeOptions} positions={state.path} />

      </MapContainer>
    </div>
  )
}

export default MapView