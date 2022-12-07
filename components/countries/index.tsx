import React from 'react';
import UseSearchCountry from '../../hooks/useSearchCountry';
import {ICountry} from '../../types/country';
import Autocomplete from '../autocomplete';
import styles from './countries.module.scss';

type TCountriesTypes = {
  countries: Array<ICountry>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  selectedCountry: ICountry | undefined;
  setSelectedCountry: React.Dispatch<
    React.SetStateAction<ICountry | undefined>
  >;
  loading: boolean;
};

function Countries({
  countries,
  setSearch,
  search,
  selectedCountry,
  setSelectedCountry,
  loading,
}: TCountriesTypes) {
  return (
    <>
      <div className={styles.countries}>
        <div className={styles.header}>
          <span>Find the closest country</span>
        </div>

        <Autocomplete
          data={countries}
          title="admin"
          setSearch={setSearch}
          search={search}
          selected={selectedCountry}
          setSelected={setSelectedCountry}
          loading={loading}
        />
      </div>
    </>
  );
}

export default Countries;
