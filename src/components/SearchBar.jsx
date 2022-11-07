import SearchIcon from "../assets/icons/SearchIcon";

function SearchBar() {
  return (
    <div className="flex items-center justify-between bg-white rounded-[26px] overflow-hidden ">
      <input
        id="search"
        type="text"
        placeholder="Поиск по названию товара"
        className="flex-1 outline-none text-base text-darkColor leading-[0px] tracking-[-0.3px] placeholder:text-greyColor pl-5 py-3 bg-none"
      />
      <button className="bg-greenColor py-[13px] px-[38px] rounded-r-[26px]">
        <label htmlFor="search" className="cursor-pointer">
          <SearchIcon />
        </label>
      </button>
    </div>
  );
}
export default SearchBar;
