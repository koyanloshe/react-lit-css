import React from "react";
import "./index.css";
import { Suspense, useState, useEffect } from "react";
import { getData } from "../../data/api";

const temp = {
  name: "Fergus Fungal Budge",
  effect: "Treats ringworm, fungicide",
  sideEffects: "Potential negative side effects if used by elves",
  characteristics: null,
  time: null,
  difficulty: "Unknown",
  ingredients: [
    {
      id: "4ff5aaf2-776f-43c6-9896-c79c67dc90c5",
      name: "Neem oil"
    },
    {
      id: "846be123-c40f-4156-91f4-800305df7485",
      name: "Jewelweed"
    },
    {
      id: "a08e7390-a362-4013-b413-11b151fae20e",
      name: "Onion juice"
    }
  ],
  inventors: [],
  manufacturer: ""
};

export const TableR = ({ tableData, tableCaption }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(tableData).then((res) => setData(res));
  }, [tableData]);

  console.log(data);
  const renderLoader = () => <p>Loading</p>;

  return (
    <Suspense fallback={renderLoader()}>
      <table className="table caption-top">
        <caption>{tableCaption}</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td colSpan="4">
              <details>
                <summary className="w-100">Ingredients</summary>
                <table className="table mb-0">
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </details>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Summary</th>
            <td>Footer</td>
            <td>Footer</td>
            <td>Footer</td>
          </tr>
        </tfoot>
      </table>
    </Suspense>
  );
};
