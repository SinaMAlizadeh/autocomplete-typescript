import {getCountryBySearch} from './../sevices/country/index';
import {ICountry} from './../types/country.d';
import {useEffect, useState} from 'react';
import useDebounce from './useDebounce';

function UseSearchCountry(location: ILocation) {
  const [search, setSearch] = useState<string>('');
  const [countries, setCountries] = useState<Array<ICountry>>([]);
  const [selectedCountry, setSelectedCountry] = useState<ICountry>();
  const [loading, setLoading] = useState<boolean>(false);
  const debouncedValue = useDebounce<string>(search, 500);
  useEffect(() => {
    if (search && !selectedCountry) {
      getByFilter();
    } else {
      setCountries([]);
    }
  }, [debouncedValue]);

  const getByFilter = async () => {
    setLoading(true);
    const response = await getCountryBySearch(search, location);
    setLoading(false);
    setCountries(response);
  };

  useEffect(() => {
    if (selectedCountry) {
      setSearch(selectedCountry?.admin);
    }
  }, [selectedCountry]);

  return {
    search,
    setSearch,
    countries,
    selectedCountry,
    setSelectedCountry,
    loading,
  };
}

export default UseSearchCountry;
