import { FC, ChangeEvent, useState, useEffect } from "react";
import cn from 'classnames';

import useDebounce from '../../hooks/useDebounce';

import styles from './SearchBar.module.scss';

interface SearchBarProps {
  label: string;
  onSearch: (searchTerm: string) => void;
  className?: string;
  value?: string;
}

export const SearchBar: FC<SearchBarProps> = ({value = '',  className = '', label, onSearch }): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState(value);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const nextSearchTerm = event.target.value;
    if (nextSearchTerm === searchTerm) return;
    setSearchTerm(nextSearchTerm);
  }

  return (
    <div className={cn(styles.searchBar, className)}>
      <label htmlFor="searchBar">{label}</label>
      <input
        value={searchTerm}
        onChange={onChangeHandler}
        id="searchBar"
        type="text"
        placeholder="Enter keywords"
      />
    </div>
  );
};
