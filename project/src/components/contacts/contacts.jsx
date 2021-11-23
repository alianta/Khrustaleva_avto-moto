import React from 'react';
import GoogleMapReact from 'google-map-react';
import {MapSettings} from '../../const';

const MAP_PIN = './img/map-pin.svg';

function Contacts() {

  const renderMarkers = (map, maps) => {
    const marker = new maps.Marker({
      position: { lat: MapSettings.CENTER.lat, lng: MapSettings.CENTER.lng },
      map,
      icon: MAP_PIN,
    });
    return marker;
  };

  return (
    <div className="contacts">
      <ul className="contacts__info">
        <li className="contacts__item">
          <h3 className="contacts__item-title">Адрес</h3>
          <span className="contacts__item-text">Санкт-Петербург,<br/>набережная реки Карповки, дом 5</span>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__item-title">Режим работы</h3>
          <span className="contacts__item-text">Ежедневно, с 10:00 до 21:00</span>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__item-title">Телефон</h3>
          <a className="contacts__item-text" href="tel:+78003335599">8 (800) 333-55-99</a>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__item-title">E-mail</h3>
          <a className="contacts__item-text" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </li>
      </ul>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyDVO0jnpeT5nMOzS9LEG1srk2lchp4LMug'}}
          defaultCenter={MapSettings.CENTER}
          defaultZoom={MapSettings.ZOOM}
          options={{
            fullscreenControl: false,
            zoomControl: false,
          }}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        >
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Contacts;
