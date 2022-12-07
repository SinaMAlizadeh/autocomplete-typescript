import React, {Dispatch, SetStateAction} from 'react';
import AutocompleteItems from './items';
import styles from './autocomplete.module.scss';
import Loading from '../../assets/loading.gif';
import Image from 'next/image';

type TAutocompleteProps<T extends Record<string, any>, K extends keyof T> = {
  data: Array<T>;
  title: K;
  search: string;
  selected: T | undefined;
  setSearch: Dispatch<SetStateAction<string>>;
  setSelected: Dispatch<SetStateAction<T | undefined>>;
  loading: boolean;
};

const Autocomplete = <T extends Record<string, any>, K extends keyof T>({
  data,
  title,
  search,
  setSearch,
  selected,
  setSelected,
  loading,
}: TAutocompleteProps<T, K>) => {
  return (
    <>
      <div className={styles.autocomplete}>
        {loading && <Image src={Loading} alt="loading" />}
        <input
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setSelected(undefined);
          }}
        />
        {!selected && data?.length > 0 && (
          <AutocompleteItems
            data={data}
            title={title}
            search={search}
            setSelected={setSelected}
          />
        )}
      </div>
    </>
  );
};

export default Autocomplete;
