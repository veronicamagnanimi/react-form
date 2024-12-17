import {useState} from "react";
import flowers from "./data/flowers";

function App() {
  const [flow, setFlow] = useState([])

  // FUNZIONE EVENTO
  const handleFlowersForm = (event) => {
    event.preventDefault();
  }

  return (
    <>

    <div className="container">
      <section>
        <h3 className="text-center text-danger my-3">🌸La lista dei fiori🌸</h3>
        <form action="" className="" onSubmit={handleFlowersForm}>
          <div>
            <label htmlFor="fiori">Fiori</label>
            <input type="text" className="form-control" id="fiori"
             value={flow}
              onChange={(event) => setFlow(event.target.value)}>
             </input>
          </div>

        </form>
      </section>











      <section>
        <div className="row row-cols-2 row-cols-lg-3 mt-5">
          {flow.map((curItem) => (
            <div className="col" key={curItem.id}>
              <div className="card">
                <h4 className="text-center text-danger pt-2">{curItem.name}</h4>
                <p className="p-1 text-center">{curItem.description}</p>
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
