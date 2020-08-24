import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

class ParcerResults extends Component {
  render() {
    return (
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>№</th>
            <th>URL</th>
            <th>Rating Param</th>
            <th>Extra info</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    );
  }
}

export default ParcerResults;
