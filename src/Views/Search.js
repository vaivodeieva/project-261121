import '../Assets/Css/Search.css';
function Search() {

    return (
        <div>
            <div class="widget-wrap">
                <h1>SEARCHABLE LIST</h1>

                <input type="text" id="the-filter" placeholder="Search For..." autocomplete="off" />

                <ul id="the-list">
                    <li>Apple</li>
                    <li>Apricots</li>
                    <li>Avocado</li>
                    <li>Banana</li>
                    <li>Blackberries</li>
                    <li>Blueberries</li>
                    <li>Cherries</li>
                    <li>Coconut</li>
                    <li>Cranberries</li>
                    <li>Durian</li>
                    <li>Elderberries</li>
                    <li>Grapefruit</li>
                    <li>Grapes</li>
                    <li>Guava</li>
                    <li>Honeydew</li>
                    <li>Jackfruit</li>
                    <li>Longan</li>
                    <li>Loquat</li>
                    <li>Mango</li>
                    <li>Orange</li>
                    <li>Papaya</li>
                    <li>Pear</li>
                    <li>Pineapple</li>
                    <li>Strawberries</li>
                    <li>Watermelon</li>
                </ul>

                <div id="code-boxx">
                    Visit
                    <a href="https://code-boxx.com/filter-search-list-in-javascript/" target="_blank">
                        Code Boxx
                    </a> for more details.
                </div>
            </div>
        </div>
    )
}

export default Search;