import {useState} from "react";
import flowers from "./data/flowers";

function App() {
  const [formValue, setFormValue] = useState(""); // Stato per l'input
  const [flowerList, setFlowerList] = useState([]); // Stato per la lista dei fiori

  // FUNZIONE EVENTO
  const handleFlowersForm = (event) => {
    event.preventDefault();
    if(formValue === "fiori") {
      setFlowerList(flowers);
    } else {
      setFlowerList([])
    }
    }


  // ELIMINARE
  const flowToDelete = (idDelete) => {
    const newArray = flowers.filter(curFlow => curFlow.id !== idDelete);
    setFlowerList(newArray);
  }

  return (
    <>

    <div className="container">
      <section>
        <h3 className="text-center text-danger my-3">🌸La lista dei fiori🌸</h3>
        <form action="" className="" onSubmit={handleFlowersForm}>
          <div>
            <label htmlFor="fiori" className="mb-2">Scrivi la parola indicata (Fiori)</label>
            <input type="text" className="form-control" id="fiori" placeholder="Fiori"
             value={formValue}
              onChange={(event) => setFormValue(event.target.value)}>
             </input>
          </div>
          <button type="submit" className="btn btn-danger mt-3">Conferma</button>
        </form>
        </section>
      
      <section>
       <div className="row row-cols-2 row-cols-lg-3 mt-3">
          {flowerList.map((curItem) => (
            <div className="col" key={curItem.id}>
              <div className="card mt-2">
                <h4 className="text-center text-danger pt-2">{curItem.name}</h4>
                <p className="p-1 text-center">{curItem.description}</p>
                <div className="d-flex justify-content-center pb-2">
                <button onClick={() => flowToDelete(curItem.id)} className="btn btn-outline-danger w-50">Elimina</button></div>
              </div>
            </div>
          ))}
        </div>
        </section>
        </div>
    </>
  )
}

export default App
