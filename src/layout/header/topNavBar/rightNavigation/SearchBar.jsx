import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";
import { useUser } from "../../../../users/providers/UserProvider";
const SearchBar = ({ posts, setSearchResults }) => {
  const { search, setSearch } = useUser();

  const handleSearchChange = async (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <TextField
        onChange={handleSearchChange}
        value={search}
        label="search.."
        sx={{ backgroundColor: 'white'}}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </>
  );
};
export default SearchBar;
