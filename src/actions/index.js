// TODO: add and export your own actions
import slugs from '../slugs';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: slugs
  };
}

export function setActiveCity(city) {
  return {
    type: 'SET_CITY',
    payload: city
  };
}
