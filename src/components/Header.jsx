import { useSelector } from 'react-redux'
import store from '../redux/store';

const Header = () => {

  const state= useSelector((store) => store.flight);

  return (
    <header>
      <div>

      <img src="https://www.pngmart.com/files/13/Vector-Flying-Airplane-PNG-Transparent-Image.png"/>
      <h3>Uçuş Radarı</h3>
      </div>
    <p>{state.isLoading ? <img width={50} src="https://sparta-aims.ams3.digitaloceanspaces.com/others/assets/img/loader_v2.gif"/> 
    : state.isError ? "Bir sorun oluştu" 
    : state.flights.length + ' Uçuş bulundu'}</p>
    </header>
  )
}

export default Header