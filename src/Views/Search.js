import '../Assets/Css/Search.css';
function Search() {
  window.addEventListener("load", () => {
    var filter = document.getElementById("the-filter"),
      list = document.querySelectorAll("#the-list li");
    filter.onkeyup = () => {
      let search = filter.value.toLowerCase();
      for (let i of list) {
        let item = i.innerHTML.toLowerCase();
        if (item.indexOf(search) == -1) {
          i.classList.add("hide");
        } else {
          i.classList.remove("hide");
        }
      }
    };
  });
  return (
    <div className='search-container'>
      <div className="widget-wrap col-lg-6 md-4">
        <h2 className='col-sm-2'>SEARCHABLE LIST</h2>
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
      </div>
    </div>
  )
}
export default Search;