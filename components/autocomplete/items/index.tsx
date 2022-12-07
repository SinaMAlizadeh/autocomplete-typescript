import React, {Dispatch, SetStateAction} from 'react';
import AutocompleteItem from '../item';
import styles from './items.module.scss';
type AutocompleteItemsProps<
  T extends Record<string, any>,
  K extends keyof T,
> = {
  data: Array<T>;
  title: K;
  search: string;
  setSelected: Dispatch<SetStateAction<T | undefined>>;
};

const AutocompleteItems = <T extends Record<string, any>, K extends keyof T>({
  data,
  title,
  search,
  setSelected,
}: AutocompleteItemsProps<T, K>) => {
  return (
    <>
      <div className={styles.content}>
        {React.Children.toArray(
          data?.map(item => {
            return (
              <div onClick={() => setSelected(item)}>
                <AutocompleteItem
                  title={item[title]}
                  searchLength={search?.length}
                />
              </div>
            );
          }),
        )}
      </div>
    </>
  );
};

export default AutocompleteItems;
