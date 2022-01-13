import '../Assets/Css/Search.css';
function Search() {

    return (
        <div>
            <nav>
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="Search" />
                    <i class="bi bi-search" id="search-btn"></i>
                </div>
            </nav>

            <main>
                <h1>Expandable Search Bar</h1>
            </main>


        </div>
    )
}

export default Search;