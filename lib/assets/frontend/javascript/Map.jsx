import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      loading: true
    };
  }
  componentDidMount(rootNode) {
    if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = pos.coords;
            this.setState({
                currentLocation: {
                    lat: coords.latitude,
                    lng: coords.longitude
                },
                loading: false
            });
            this.loadMap();
        })
    }
  }
  buttonGo() {
    alert('hello');
  }
  loadMap() {
    if(this.state.currentLocation) {
      var map = new google.maps.Map(document.getElementById('mapp'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 15
       });
      var infoWindow = new google.maps.InfoWindow({map: map});
      var pos = {
            lat: this.state.currentLocation.lat,
            lng: this.state.currentLocation.lng
      };
      var contentString = `
        <h2>Your Location Has Been Found!</h2>
      `;
      infoWindow.setPosition(pos);
      infoWindow.setContent(contentString);
      map.setCenter(pos);
      this.setState({map: map});
    }
  }
  render() {
    const loading = this.state.loading;
    if(loading) {
      return (
        <p>LOADING</p>
      );
    }
    return (
      <div>
        <div id="mapp" style={{height: "calc(100vh - 100px)"}} className='map-gic'></div>
        <button className="btn btn-success btn-default" onClick={this.buttonGo}>Request Walk</button>
      </div>
    );
  }
};
export default Map;
