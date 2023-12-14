import { useEffect, useState } from "react"
import Header from "./components/Header"
import ListView from "./pages/ListView"
import MapView from "./pages/MapView"
import { useDispatch } from "react-redux"
import { getFlights } from "./redux/actions/flightAction"
import DetailModal from "./components/DetailModal"

const App = () => {

  const [isMapView, setIsMapView] = useState()
  const [isModalOpen, setIsModalOpen] =useState(false)
  const [detailId, setDetailId] = useState(null)
  const dispatch= useDispatch()

  useEffect(() => {
    // setInterval(() => dispatch(getFlights()), 5000)
    dispatch(getFlights())
  },[])

  /* modal ı açar */
  const openModal = (id) => {
    setIsModalOpen(true)
    setDetailId(id)
  }

 /* modal ı kapatır */

const closeModal = () => {
  setIsModalOpen(false)
  setDetailId(null)
}

  return (
    <>
      <Header />
      <div className="view-buttons">
        <button className={isMapView ? 'active' : '' } onClick={() => setIsMapView(true)}>Harita Görünümü</button>
        <button className={isMapView ? '' : 'active' } onClick={() => setIsMapView(false)}>Liste Görünümü</button>
      </div>

      {isMapView ? <MapView openModal={openModal} /> 
      : <ListView 
      openModal={openModal}/>}

      {/* her iki sayfada da kullanabilmek için modal ı App.jsx te tuttuk */}

      {isModalOpen && <DetailModal closeModal={closeModal} detailId={detailId}/>}
    </>
  )
}

export default App