import React, { Component } from "react";
import axios from "axios";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

export class ParcerResults extends Component {
  state = {
    isLoading: true,
    error: "",
    sites: ""
  };
  componentDidMount() {
    return axios
      .post(`/api/sites/list`)
      .then(response => {
        if (response.data.success) {
          this.setState({
            isLoading: false,
            error: "",
            sites: response.data.sites
          });
        } else {
          this.setState({ isLoading: false, error: response.data.error });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          error: error.response.data.error
        });
      });
  }
  render() {
    return (
      <div>
        {!this.state.sites[0] ? (
          <div>Сайтов не найдено</div>
        ) : (
          <div className="monitor-cont">
            <h4>Результаты</h4>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">HumanId</th>
                  <th scope="col">URL</th>
                  <th scope="col">RatingParam</th>
                  <th scope="col">DomainEmpty</th>
                  <th scope="col">extraInfo</th>
                </tr>
              </thead>
              <tbody>
                {this.state.sites.map((site, index) => {
                  return (
                    <tr key={index}>
                      <td>{site.humanId}</td>
                      <td>{site.url}</td>
                      <td>{site.ratingParam}</td>
                      <td>
                        {site.domainEmpty && <i>true</i>}
                        {!site.domainEmpty && <i>false</i>}
                      </td>
                      <td>{site.extraInfo}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default ParcerResults;
