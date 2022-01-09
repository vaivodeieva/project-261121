import '../Assets/Css/Settings.css';

function Settings() {

  return (
    <div>
<div class='container'>
  <header>
    <ul class='menu'>
      <li class='menu-item active'>
        <i class='fa fa-gear'></i>
      </li>
      <li class='menu-item'>
        <i class='fa fa-user'></i>
      </li>
      <li class='menu-item'>
        <i class='fa fa-trophy'></i>
      </li>
      <li class='menu-item'>
        <i class='fa fa-bar-chart-o'></i>
      </li>
    </ul>
  </header>
  <div class='settings'>
    <div class='setting'>
      <div class='name'>
        Force touch enabled
      </div>
      <div class='info'>
        Push the screen with various intensity to enable features within your applications.
        <div class='switch'>
          <input checked='checked' id='touch-enabled' type='checkbox'/>
          <label for='touch-enabled'></label>
        </div>
      </div>
    </div>
    <div class='setting'>
      <div class='name'>
        One click login
      </div>
      <div class='info'>
        Sign in to your personal and local media accounts using only one press of your finger.
        <div class='switch'>
          <input id='one-click' type='checkbox'/>
          <label for='one-click'></label>
        </div>
      </div>
    </div>
    <div class='setting'>
      <div class='name'>
        auto-subscribe
      </div>
      <div class='info'>
        Don't worry about your service turning off and losing all of your progress and projects
        <div class='switch'>
          <input checked='checked' id='auto-sub' type='checkbox'/>
          <label for='auto-sub'></label>
        </div>
      </div>
    </div>
    <div class='setting'>
      <div class='name'>
        screen brightness
      </div>
      <div class='info'>
        <div class='slider'>
          <input type='range'/>
        </div>
        <br/>
        <div class='checkbox'>
          <input checked='checked' id='auto-brightness' type='checkbox'/>
          <label for='auto-brightness'></label>
        </div>
        <div class='checkbox-label'>
          <label for='auto-brightness'>
            Auto-adjust screen brightness
          </label>
        </div>
      </div>
    </div>
    <div class='footer'>
      <button class='button cancel'>
        Cancel
      </button>
      <button class='button save'>
        Save
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Settings;