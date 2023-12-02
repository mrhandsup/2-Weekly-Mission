import './SearchLink.css';

function SearchLink() {
  return (
    <>
      <div className="search-link-area">
        <form className="link-form">
          <img src={process.env.PUBLIC_URL + '/images/search.png'} alt="검색" />
          <input name="link-search" className="link-input" placeholder="링크를 검색해보세요." />
        </form>
      </div>
    </>
  );
}

export default SearchLink;
