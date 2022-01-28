import '../Assets/Css/Notifications.css';
function Notifications() {
  window.onload = () => {
    document.body.addEventListener("mousedown", function (el) {
        const e = el.target;
        if (e.nodeName === "SPAN") {
          e.parentNode.style.opacity = 0;
          setTimeout(function () {
            document.getElementById(e.parentNode.id).remove();
            document.getElementById("message").innerHTML =
              "Accomplished exercise " + e.parentNode.id + " removed !";
            if (document.getElementsByTagName("div").length <= 0) {
              document.getElementById("message").innerHTML =
                "Congratulations! You accomplished all exercises! :)";
            }
          }, 500);
        }
      });
    }
    return (
        <div className='notifications-container'>
            <p id="message">Close the accomplished exercise!</p>
            <div id="elem1">Exercise 01<span>x</span></div>
            <div id="elem2">Exercise 02<span>x</span></div>
            <div id="elem3">Exercise 03<span>x</span></div>
            <div id="elem4">Exercise 04<span>x</span></div>
            <div id="elem5">Exercise 05<span>x</span></div>
            <div id="elem6">Exercise 06<span>x</span></div>
            <div id="elem7">Exercise 07<span>x</span></div>
            <div id="elem8">Exercise 08<span>x</span></div>
            <div id="elem9">Exercise 09<span>x</span></div>
    </div >
)
}

export default Notifications;