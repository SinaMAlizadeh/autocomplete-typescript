import React, {Dispatch, SetStateAction} from 'react';
import AutocompleteItem from '../item';
import styles from './items.module.scss';
type AutocompleteItemsProps<
  T extends Record<string, string | number>,
  K extends keyof T,
> = {
  data: Array<T>;
  title: K;
  search: string;
  setSelected: Dispatch<SetStateAction<T | undefined>>;
};

const AutocompleteItems = <
  T extends Record<string, string | number>,
  K extends keyof T,
>({
  data,
  title,
  search,
  setSelected,
}: AutocompleteItemsProps<T, K>) => {
  return (
    <>
      <div className={styles.content}>
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setSelected(item);
              }}
            >
              <AutocompleteItem
                title={item[title].toString()}
                searchLength={search?.length}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AutocompleteItems;
