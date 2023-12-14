import { useState } from "react";
import ReactPaginate from "react-paginate"
import { useSelector } from "react-redux"

const ListView = ({openModal}) => {
  const state = useSelector((store) => store.flight)

/* gösterilecek ilk elamnın dizideki sırası */
  const [itemOffset, setItemOffset] = useState(0);

  /* sayfa başı gösterilecek uçuş sayısı */
  const itemsPerPage = 10;

/* gösterilecek sonuncu elemanın dizideki yeri */
  const endOffset = itemOffset + itemsPerPage;

  /* belirlenen aralıktaki elemanları seçme */
  const currentItems = state.flights.slice(itemOffset, endOffset);
  
  /* toplam sayfa sayısı  */
  const pageCount = Math.ceil(state.flights.length / itemsPerPage);
 
  /* her yeni sayfa seçildiğinde state e aktarır. */
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state.flights.length;
    setItemOffset(newOffset);
  };


  
  return (


    <div className="p-4">

    <table className="table table-dark table-hover mt-5">
      <thead>
        <tr>
          <th>id</th>
          <th>Kuyruk Kodu</th>
          <th>Enlem</th>
          <th>Boylam</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {currentItems.slice(0,10).map((flight) => (
        <tr>
          <td>{flight.id}</td>
          <td>{flight.code}</td>
          <td>{flight.lat}</td>
          <td>{flight.lng}</td>
          <td>
            <button onClick={() => openModal(flight.id)}>Detay</button>
          </td>
        </tr>) )}
      </tbody>
    </table>
    <ReactPaginate        
        breakLabel="..."
        nextLabel="ileri >"
        className="pagination"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< geri"
        
        />
    </div>
  )
}

export default ListView