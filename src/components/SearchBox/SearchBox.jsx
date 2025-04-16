import css from './SearchBox.module.css';

const SearchBox=({ search, setSearch })=> {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;