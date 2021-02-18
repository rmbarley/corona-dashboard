import React from "react";

import { fetchData } from "./api";
import { Cards, Chart, CountryPicker } from "./components/";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}></Cards>
        <CountryPicker
          handleCountryChange={this.handleCountryChange}></CountryPicker>
        <Chart data={data} country={country}></Chart>
      </div>
    );
  }
}

export default App;
