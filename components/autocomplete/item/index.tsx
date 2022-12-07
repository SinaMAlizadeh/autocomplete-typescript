import styles from './item.module.scss';
type TAutocompleteItemProps = {
  title: string;
  searchLength: number;
};

const getSuggestionText = (suggestion: string, length: number) => {
  return (
    <span>
      <b>{suggestion.slice(0, length)}</b>
      {suggestion.slice(length)}
    </span>
  );
};

function AutocompleteItem({title, searchLength}: TAutocompleteItemProps) {
  return (
    <>
      <div className={styles.autocompleteItem}>
        <>{getSuggestionText(title, searchLength)}</>
      </div>
    </>
  );
}

export default AutocompleteItem;
