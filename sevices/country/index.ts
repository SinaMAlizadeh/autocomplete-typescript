import axios from 'axios';
import {ICountry} from '../../types/country';
import Api from '../route';
import data from '../../countries_metadata.json';

export const getCountryBySearch = async (search: string) => {
  const {data}: {data: Array<ICountry>} = await axios.get(
    Api.baseApi + Api.COUNTRY_API + `?search=${search}`,
  );
  return data;
};

export const getAllCountry = async () => {
  return data.countries;
};
