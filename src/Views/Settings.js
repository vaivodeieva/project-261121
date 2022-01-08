import '../Assets/Css/Settings.css';
import $ from 'jquery';

function Settings() {
$("nav a").click(function (e) {
    e.preventDefault();
    $("nav a").removeClass("active");
    $(this).addClass("active");
    if (this.id === !"payment") {
      $(".payment").addClass("noshow");
    } else if (this.id === "payment") {
      $(".payment").removeClass("noshow");
      $(".rightbox").children().not(".payment").addClass("noshow");
    } else if (this.id === "profile") {
      $(".profile").removeClass("noshow");
      $(".rightbox").children().not(".profile").addClass("noshow");
    } else if (this.id === "subscription") {
      $(".subscription").removeClass("noshow");
      $(".rightbox").children().not(".subscription").addClass("noshow");
    } else if (this.id === "privacy") {
      $(".privacy").removeClass("noshow");
      $(".rightbox").children().not(".privacy").addClass("noshow");
    } else if (this.id === "settings") {
      $(".settings").removeClass("noshow");
      $(".rightbox").children().not(".settings").addClass("noshow");
    }
  });
  

    return (
        <div className="settings-container">
            <div className="container-sett">
                <div id="CTA">
                    <h1>Get $99</h1>
                </div>
                <div className="leftbox1">
                    <nav>
                        <a id="profile" className="active"><i className="fa fa-user"></i></a>
                        <a id="payment"><i className="fa fa-credit-card"></i></a>
                        <a id="subscription"><i className="fa fa-tv"></i></a>
                        <a id="privacy"><i className="fa fa-tasks"></i></a>
                        <a id="settings"><i className="fa fa-cog"></i></a>
                    </nav>
                </div>

                <div className="rightbox">

                    <div className="profile">
                        <h1>Personal Info</h1>
                        <h2>Full Name</h2>
                        <p>John Doe <button className="btn">update</button></p>
                        <h2>Birthday</h2>
                        <p>May 25</p>
                        <h2>Gender</h2>
                        <p>Male</p>
                        <h2>Email</h2>
                        <p>example@example.com <button className="btn">update</button></p>
                        <h2>Password </h2>
                        <p>••••••• <button className="btn">Change</button></p>
                    </div>

                    <div className="payment noshow">
                        <h1>Payment Info</h1>
                        <h2>Payment Method</h2>
                        <p>Mastercard •••• •••• •••• 0000 <button className="btn">update</button></p>
                        <h2>Billing Address</h2>
                        <p>1234 Example Ave | Earth <button className="btn">change</button></p>
                        <h2>Zipcode</h2>
                        <p>000000</p>
                        <h2>Billing History</h2>
                        <p>2018<button className="btn">view</button></p>
                        <h2>Redeem Gift Subscription </h2>
                        <p><input type="text" placeholder="Enter Gift Code"></input> <button className="btn">Redeem</button></p>
                    </div>

                    <div className="subscription noshow">
                        <h1>Your Subscription</h1>
                        <h2>Payment Date</h2>
                        <p>05-15-2020 <button className="btn">pay now</button></p>
                        <h2>Your Next Charge</h2>
                        <p>$ 599<span> includes tax</span></p>
                        <h2>Hulu Base Plan</h2>
                        <p>Limited Commercials <button className="btn">change plan</button></p>
                        <h2>Add-ons</h2>
                        <p>None <button className="btn">manage</button></p>
                        <h2>Monthly Recurring Total </h2>
                        <p>$ 499/month</p>
                    </div>

                    <div className="privacy noshow">
                        <h1>Privacy Settings</h1>
                        <h2>Manage Email Notifications<button className="btn">manage</button></h2>
                        <p></p>
                        <h2>Manage Privacy Settings<button className="btn">manage</button></h2>
                        <p></p>
                        <h2>View Terms of Use <button className="btn">view</button></h2>
                        <p></p>
                        <h2>Personalize Ad Experience <button className="btn">update</button></h2>
                        <p></p>
                        <h2>Protect Your Account <button className="btn">protect</button></h2>
                        <p></p>
                    </div>
                    <div className="settings noshow">
                        <h1>Account Settings</h1>
                        <h2>Sync Watchlist to My Stuff<button className="btn">sync</button></h2>
                        <p></p>
                        <h2>Hold Your Subscription<button className="btn">hold</button></h2>
                        <p></p>
                        <h2>Cancel Your Subscription <button className="btn">cancel</button></h2>
                        <p></p>
                        <h2>Your Devices <button className="btn">Manage Devices</button></h2>
                        <p></p>
                        <h2>Referrals <button className="btn">get $100</button></h2>
                        <p></p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Settings;