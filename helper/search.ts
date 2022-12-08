import {inflate} from 'zlib';
import {ICountry} from './../types/country.d';

export const filterCountry = (
  countries: Array<ICountry>,
  search: string,
  lat: number,
  lng: number,
): Array<ICountry> => {
  let filterCountries = countries.filter(country =>
    country.admin
      .trim()
      .toLocaleLowerCase()
      .startsWith(search.trim().toLocaleLowerCase()),
  );
  return sortCountries(filterCountries, lat, lng);
};

const sortCountries = (
  countries: Array<ICountry>,
  selectedLat: number,
  selectedLng: number,
): Array<ICountry> => {
  return countries.sort(function (a, b) {
    return (
      distance(selectedLat, selectedLng, a.lat, a.lng) -
      distance(selectedLat, selectedLng, b.lat, b.lng)
    );
  });
};

const distance = function (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  var radlat1 = (Math.PI * lat1) / 180;
  var radlat2 = (Math.PI * lat2) / 180;
  var theta = lon1 - lon2;
  var radtheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  dist = dist * 1.609344;

  return dist;
};
