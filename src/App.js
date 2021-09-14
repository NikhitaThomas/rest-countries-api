import './App.css';
import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {

    fetch('https://restcountries.eu/rest/v2/region/asia')
      .then(res => res.json())
      .then(item => {
        this.setState({
          isLoaded: true,
          items: item
        })
      })
  }



  render() {
    var { isLoaded, items } = this.state

    if (!isLoaded) {
      return <div>Loading</div>
    } else {
      return (
        <div className="App">
          <ul className="items">
            {items.map(item => (

              <li className='item' key={item.id}>
                <div className="names">
                  <li>COUNTRY: {item.name} <br />CAPITAL: {item.capital}</li>

                  <li>REGION: {item.region} <br /> SUBREGION: {item.subregion}</li>
                  <li>POPULATION:{item.population}  <br />BORDERS: {item.borders}</li>
                  <li>Languages: {item.languages.map(lang => (
                    <li className='languages'>{lang.name}</li>
                  ))}
                  </li>
                </div>
                <div className="flags">
                  <li><img className='flag' src={item.flag} /></li>
                </div>


              </li>
            ))}
          </ul>
        </div >
      )
    }
  }
}

export default App;
