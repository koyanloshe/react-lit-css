import "./index.css";
import "../sparkle";
import { TableR } from "../TableR";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* <sparkle-element /> */}
            <div className="table-responsive">
              <TableR
                tableData={"https://wizard-world-api.herokuapp.com/Elixirs"}
                tableCaption={`List of Elixirs`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
