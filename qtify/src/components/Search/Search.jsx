import React from "react";
import { useNavigate } from "react-router-dom";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import styles from "./Search.module.css"
import SearchIcon from "../SearchIcon/SearchIcon";

const Search = () => {
  const {
    getRootProps,
    getInputLabelProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    // options: searchData || [],
    getOptionLabel: (option) => option.title,
  });
  const navigate = useNavigate();
  const onSubmit = (e, value) => {
    e.preventDefault();
    console.log(value);
    navigate(`/album/${value.slug}`);
  };
  return (
    <div className={styles.mobileSearch}style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          onSubmit(e, value);
        }}
      >
        <div>
          <input
            name="album"
            className={styles.search}
            placeholder="Search a album of your choice"
            required
            // {...getInputProps()}
          />
        </div>
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;