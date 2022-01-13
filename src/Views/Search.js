import '../Assets/Css/Search.css';
function Search() {

    return (
        <div>
            <nav className='search-nav'>
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="Search" />
                    <i class="bi bi-search" id="search-btn"></i>
                </div>
            </nav>
        </div>
    )
}

export default Search;