import '../Assets/Css/Settings.css';

// let TestCode;
// let doNeonAnim;
// let doBreath;
// let doGlowed;
// let doBrightup;
// let doFlipstripes;
// let doStripes;
// let doIcnAnim;
// let doIcons;
// let doBorderWidth;
// let doBorder;
// let doUpperCase;
// let doEdges;
// let doOversize;
// let doWide;
// let doButtonSize;
// let doBackground;
// let doColors;
// let TestButton;
// let bgView;
// let doReflect;
// let jClass;
// let TestPalette;
// let input;
// let doFont;

function Settings() {

  // jClass = "";
  // doUpperCase = "";
  // doReflect = "";
  // doWide = "";
  // doEdges = "";
  // doBorder = "";
  // doBreath = "";
  // doBorderWidth = "";
  // doButtonSize = "";
  // doOversize = "";
  // doStripes = "";
  // doColors = "";
  // doIcons = "";
  // doIcnAnim = "";
  // doBackground = "";
  // doBrightup = "";
  // doGlowed = "";
  // doNeonAnim = "";
  // doFont = "";
  // doFlipstripes = "";
  
  // var i;
  
  // function HtmlEncode(s) {
  //   var el = document.createElement("div");
  //   el.innerText = el.textContent = s;
  //   s = el.innerHTML;
  //   return s;
  // }
  
  // TestButton = document.getElementById("TestBtn");
  // TestPalette = document.getElementById("palette");
  // TestCode = document.getElementById("btn-code-html");
  // TestCode.innerHTML = HtmlEncode(TestButton.outerHTML);
  
  // bgView = document.getElementsByClassName("bg-view");
  
  // for (input of document.querySelectorAll("input[type=range]")) {
  //   updateInput(input);
  // }
  
  // document.addEventListener("input", function (slide) {
  //   let input = slide.target;
  //   updateInput(input);
  // });
  
  // function updateInput(input) {
  //   let inputID = input.getAttribute("id");
  //   let innerText = input.getAttribute("btn-text");
  
  //   function setInner(c, d) {
  //     switch (jClass) {
  //       case "action-button":
  //         switch (c) {
  //           case " img-bg-gaming":
  //             c = "Play <b>some</b> amazing games";
  //             break;
  //           case " img-bg-shopping":
  //             c = "Continue shopping <b>now</b>";
  //             break;
  //           case " img-bg-codepen":
  //             c = "Follow me on <b>CodePen</b>";
  //             break;
  //           case " img-bg-settings":
  //             c = "Change some <b>settings</b>";
  //             break;
  //           case " img-bg-funny":
  //             c = "Do something <b>fun</b> today";
  //             break;
  
  //           default:
  //             c = "Icon <b>and</b> Background";
  //         }
  //         break;
  //       case "neon-button":
  //         switch (c) {
  //           case " neon-framed dual":
  //             c = 'Dual <span className="neon-enhanced color-candy8"></span>';
  //             break;
  //           case " neon-framed":
  //             c = 'Frame <span className="neon-enhanced"></span>';
  //             break;
  //           case " neon-fused":
  //             c = 'Fuse <span className="neon-enhanced"></span>';
  //             break;
  
  //           case " neon-wrapped":
  //             c = "Wrap";
  //             break;
  //           case " neon-orbiter":
  //             c = "Orbit";
  //             break;
  //           default:
  //             c = "add more";
  //         }
  //         break;
  //       default:
  //         c = d;
  //     }
  
  //     return c;
  //   }
  
  //   switch (inputID) {
  //     case "btn-descend":
  //       TestButton.setAttribute("data-text", "Let go ...");
  //       jClass = input.value;
  //       TestButton.innerHTML = innerText;
  //       break;
  //     case "btn-elastic":
  //     case "btn-gloss":
  //     case "btn-frames":
  //     case "btn-freehand":
  //     case "btn-transparent":
  //     case "btn-spread":
  //     case "btn-fill":
  //     case "btn-flip":
  //     case "btn-follow":
  //     case "btn-icon":
  //     case "btn-bubble":
  //     case "btn-flag":
  //     case "btn-candy":
  //     case "btn-none":
  //     case "btn-themed":
  //       jClass = input.value;
  //       TestButton.innerHTML = setInner(doBackground, innerText);
  //       TestButton.removeAttribute("data-text");
  //       break;
  //     case "btn-neon":
  //       jClass = input.value;
  //       TestButton.innerHTML = setInner(doNeonAnim, innerText);
  //       TestButton.removeAttribute("data-text");
  //       break;
  
  //     case "uppercase":
  //       if (input.checked == true) {
  //         doUpperCase = input.value;
  //       } else {
  //         doUpperCase = "";
  //       }
  //       break;
  //     case "reflect":
  //       if (input.checked == true) {
  //         doReflect = input.value;
  //       } else {
  //         doReflect = "";
  //       }
  //       break;
  //     /*Reflection not visible in Firefox*/
  //     case "wide":
  //       if (input.checked == true) {
  //         doWide = input.value;
  //       } else {
  //         doWide = "";
  //       }
  //       break;
  //     case "breath":
  //       if (input.checked == true) {
  //         doBreath = input.value;
  //       } else {
  //         doBreath = "";
  //       }
  //       break;
  //     case "oversize":
  //       if (input.checked == true) {
  //         doOversize = input.value;
  //       } else {
  //         doOversize = "";
  //       }
  //       break;
  //     case "striped":
  //       if (input.checked == true) {
  //         doStripes = input.value;
  //       } else {
  //         doStripes = "";
  //       }
  //       break;
  //     case "flip-stripes":
  //       if (input.checked == true) {
  //         doFlipstripes = input.value;
  //       } else {
  //         doFlipstripes = "";
  //       }
  //       break;
  //     case "brightup":
  //       if (input.checked == true) {
  //         doBrightup = input.value;
  //       } else {
  //         doBrightup = "";
  //       }
  //       break;
  //     case "glowed":
  //       if (input.checked == true) {
  //         doGlowed = input.value;
  //       } else {
  //         doGlowed = "";
  //       }
  //       break;
  //     case "edge-none":
  //     case "edge-smoothed":
  //     case "edge-rounded":
  //     case "edge-round":
  //     case "edge-elliptic":
  //       doEdges = input.value;
  //       break;
  //     case "border-default":
  //     case "border-lined":
  //     case "border-dotted":
  //     case "border-dashed":
  //       doBorder = input.value;
  //       break;
  //     case "border-def":
  //     case "border-thin":
  //     case "border-normal":
  //     case "border-thick":
  //       doBorderWidth = input.value;
  //       break;
  //     case "size-default":
  //     case "size-small":
  //     case "size-normal":
  //     case "size-large":
  //     case "size-xlarge":
  //     case "size-xxlarge":
  //       doButtonSize = input.value;
  //       break;
  
  //     case "img-default":
  //       TestButton.removeAttribute("style");
  //       break;
  //     case "img-change":
  //     case "img-controls":
  //     case "img-fun":
  //     case "img-party":
  //     case "img-gaming":
  //     case "img-shopping":
  //       TestButton.setAttribute("style", input.value);
  //       break;
  
  //     case "bg-gradient-black":
  //     case "bg-gradient-blue":
  //     case "bg-gradient-gold":
  //     case "bg-gradient-green":
  //     case "bg-gradient-red":
  //     case "bg-gradient-gray":
  //     case "bg-gradient-brown":
  //       doBackground = input.value;
  //       break;
  
  //     case "bg-gaming":
  //     case "bg-shopping":
  //     case "bg-codepen":
  //     case "bg-settings":
  //     case "bg-funny":
  //     case "bg-default":
  //       doBackground = input.value;
  //       TestButton.innerHTML = setInner(doBackground, TestButton.innerHTML);
  //       break;
  
  //     case "icon-none":
  //     case "icon-gaming":
  //     case "icon-wheel":
  //     case "icon-glass":
  //     case "icon-cloud":
  //     case "icon-power":
  //     case "icon-lock":
  //     case "icon-clip":
  //     case "icon-link":
  //     case "icon-download":
  //     case "icon-upload":
  //     case "icon-paypal":
  //     case "icon-codepen":
  //     case "icon-cart":
  //     case "icon-cart-add":
  //     case "icon-print":
  //     case "icon-arrow-right":
  //     case "icon-archive":
  //     case "icon-folder":
  //     case "icon-sun":
  //     case "icon-diamond":
  //       doIcons = input.value;
  //       break;
  
  //     case "icn-none":
  //     case "icn--shake":
  //     case "icn--rubber":
  //     case "icn--rotate":
  //     case "icn--flip":
  //     case "icn--turn":
  //     case "icn--zoom":
  //       doIcnAnim = input.value;
  //       break;
  
  //     case "font-default":
  //     case "font-open-sans":
  //     case "font-consolas":
  //     case "font-oswald":
  //     case "font-patrick":
  //     case "font-bangers":
  //     case "font-quicksand":
  //     case "font-calligraffitti":
  //       doFont = input.value;
  //       break;
  
  //     case "neon-dual":
  //     case "neon-framed":
  //     case "neon-fused":
  //     case "neon-wrapped":
  //     case "neon-orbiter":
  //     case "neon-none":
  //       doNeonAnim = input.value;
  //       TestButton.innerHTML = setInner(doNeonAnim, TestButton.innerHTML);
  //       break;
  
  //     case "color-default":
  //     case "color-gray":
  //     case "color-freehand":
  //     case "color-striped":
  //     case "color-blank":
  //     case "color--black":
  //     case "color-funny-yellow":
  //     case "color--red":
  //     case "color--blue":
  //     case "color--tomato":
  //     case "color--orangered":
  //     case "color--amber":
  //     case "color--yellow":
  //     case "color--green":
  //     case "color--yellowgreen":
  //     case "color--teal":
  //     case "color--teal2":
  //     case "color--cyan":
  //     case "color--royalslate":
  //     case "color--mediumpurple":
  //     case "color--rebeccapurple":
  //     case "color-neon-red":
  //     case "color-neon-blue":
  //     case "color-neon-yellow":
  //     case "color-neon-green":
  //     case "color-candy1":
  //     case "color-candy2":
  //     case "color-candy3":
  //     case "color-candy4":
  //     case "color-candy5":
  //     case "color-candy6":
  //     case "color-candy7":
  //     case "color-candy8":
  //     case "color-candy9":
  //     case "color-gaming":
  //     case "color-shopping":
  //     case "color-codepen":
  //     case "color-settings":
  //     case "color-funny":
  //       doColors = input.value;
  //       for (i = 0; i < bgView.length; i++) {
  //         bgView[i].className = "bg-view" + doColors;
  //       }
  //       break;
  
  //     default:
  //     // code block
  //   }
  //   TestButton.className =
  //     jClass +
  //     doColors +
  //     doBackground +
  //     doButtonSize +
  //     doWide +
  //     doOversize +
  //     doEdges +
  //     doUpperCase +
  //     doBorder +
  //     doBorderWidth +
  //     doIcons +
  //     doIcnAnim +
  //     doStripes +
  //     doFlipstripes +
  //     doBrightup +
  //     doGlowed +
  //     doBreath +
  //     doNeonAnim +
  //     doFont +
  //     doReflect;
  //   TestPalette.className = doColors;
  
  //   TestCode.innerHTML = HtmlEncode(TestButton.outerHTML);
  // }
  
  
  // const form = document.getElementById("TestButton");
  // form.addEventListener("submit", (event) => {
  //   // submit event detected
  //   event.preventDefault();
  // });
  
  return (
    <div>
      <div className="fixed-wrapper">

<div className="switch-wrapper">
  <input type="checkbox" className="darkmode inversed"/>
  <form className="Demo-Panel Neon-Panel" id="TestButton" onsubmit="callLink">
    <h2>Button</h2>
    <button className="" id="TestBtn" form="TestButton" type="submit" formaction="#TestButton">
      Test Button
    </button>
    <p id="reflection">Reflection not visible in Firefox</p>
  </form>
</div>

<div className="doc">
  <ul className="" id="palette">
    <li className="textcolor"><span></span>textcolor</li>
    <li className="highlight-color"><span></span>highlight-color</li>
    <li className="textshadow"><span></span>textshadow</li>
    <li className="bordercolor"><span></span>bordercolor</li>
    <li className="bordercolor-hover"><span></span>bordercolor-hover</li>
    <li className="facecolor"><span></span>facecolor</li>
    <li className="hovercolor"><span></span>hovercolor</li>
    <li className="shadowcolor"><span></span>shadowcolor</li>
    <li className="shadowcolor-hover"><span></span>shadowcolor-hover</li>
    <li className="bottomcolor"><span></span>bottomcolor</li>
    <li className="switch-color"><span></span>switch-color</li>
  </ul>
  <p id="description">
    HTML: <br/><span id="btn-code-html"></span>
  </p>
</div>
</div>

<div className="blocker">

</div>

<div className="control-box">
<div className="control-column-1">
  <div className="control-wrapper">
    <h2>Class</h2>
    <form>
      <input type="radio" id="btn-none" name="btn-type" value="" btn-text="default" checked/>
      <label for="btn-none">.none</label><br/>
      <input type="radio" id="btn-elastic" name="btn-type" value="Elastic" btn-text="Elastic<span className='Elastic-content'></span>"/>
      <label for="btn-elastic">.Elastic<span className="cref">Elastic Hover Effect (CSS only) <e>by <a href="https://codepen.io/stanko/details/VXPeoP" target="_blank">Stanko</a></e></span></label><br/>
      <input type="radio" id="btn-gloss" name="btn-type" value="ph-btn" btn-text="add Background"/>
      <label for="btn-gloss">.ph-btn<span className="cref">Sweety Buttons <e>by <a href="https://codepen.io/pehaa/pen/KvPoOB" target="_blank">Paulina
              Hetman</a></e></span></label><br/>
      <input type="radio" id="btn-frames" name="btn-type" value="ph-button" btn-text="Frames"/>
      <label for="btn-frames">.ph-button<span className="cref">Buttons idea <e>by <a href="https://codepen.io/pehaa/pen/LroaBR" target="_blank">Paulina
              Hetman</a></e></span></label><br/>
      <input type="radio" id="btn-freehand" name="btn-type" value="freehand-btn" btn-text="Hand-Drawn Border"/>
      <label for="btn-freehand">.freehand-btn<span className="cref">Hand-Drawn Border Buttons <e>by <a href="https://codepen.io/tmrDevelops/pen/VeRvKX" target="_blank">Tiffany
              Rayside</a></e></span></label><br/>
      <input type="radio" id="btn-transparent" name="btn-type" value="btn-transparent" btn-text="transparent"/>
      <label for="btn-transparent">.btn-transparent</label><br/>
      <input type="radio" id="btn-spread" name="btn-type" value="btn-tr" btn-text="Spread"/>
      <label for="btn-spread">.btn-tr<span className="cref">css 3 buttons <e>by <a href="https://codepen.io/wemonsh/pen/wGbeya" target="_blank">Oleg
              Semenov</a></e></span></label><br/>
      <input type="radio" id="btn-fill" name="btn-type" value="btn-qa" btn-text="Fill up"/>
      <label for="btn-fill">.btn-qa<span className="cref">css 3 buttons by <a href="https://codepen.io/wemonsh/pen/wGbeya" target="_blank">Oleg
              Semenov</a></span></label><br/>
      <input type="radio" id="btn-descend" name="btn-type" value="td-button" btn-text="Descend"/>
      <label for="btn-descend">.td-button<span className="cref">Wacom Hover Effect <e>by <a href="https://codepen.io/tdevine33/pen/cjFbt" target="_blank">Terence
              Devine</a></e></span></label><br/>
      <input type="radio" id="btn-flip" name="btn-type" value="btn-12" btn-text="<span>Click!</span><span>Read more</span>"/>
      <label for="btn-flip">.btn-12<span className="cref">Candy Color Button Animation <e>by <a href="https://codepen.io/yuhomyan/pen/OJMejWJ" target="_blank">Yuhomyan</a></e></span></label><br/>
      <input type="radio" id="btn-follow" name="btn-type" value="Follow-button" btn-text="Follow me"/>
      <label for="btn-follow">.Follow-button<span className="cref">Animated - Button <e>by <a href="https://codepen.io/matchboxhero/pen/EwdmmP" target="#Followme">Steven Robert</a>
          </e></span></label><br/>
      <input type="radio" id="btn-icon" name="btn-type" value="imgbtn" btn-text="Icon / Picture"/>
      <label for="btn-icon">.imgbtn<span className="cref">Button Pure CSS <e>by <a href="https://codepen.io/fernnj/pen/gOMpwGE" target="_blank">Fernand
              Sobczak</a></e></span></label><br/>
      <input type="radio" id="btn-bubble" name="btn-type" value="fun-button" btn-text="<span className='fun-text'>Add an Icon!</span>"/>
      <label for="btn-bubble">.fun-button<span className="cref">Funny Button <e>by <a href="https://codepen.io/inhyechoi/pen/QdQrZg" target="_blank">InHye Choi</a>
          </e></span></label><br/>
      <input type="radio" id="btn-flag" name="btn-type" value="funny-button" btn-text="Flag it"/>
      <label for="btn-flag">.funny-button<span className="cref">Funny Button <e>by <a href="https://codepen.io/ankushc/pen/VPrrGN" target="_blank">Ankush
              Chatterjee</a></e></span></label><br/>
      <input type="radio" id="btn-themed" name="btn-type" value="action-button" btn-text="Icon <b>and</b> Background"/>
      <label for="btn-themed">.action-button<span className="cref">CSS Background Buttons with mixin <e>by <a href="https://codepen.io/jcoulterdesign/pen/GoYqOj" target="_blank">Jamie Coulter</a></e></span></label><br/>
      <input type="radio" id="btn-candy" name="btn-type" value="candy-button" btn-text="Candy"/>
      <label for="btn-candy">.candy-button<span className="cref">Neon candy buttons with CSS variables <e>by <a href="https://codepen.io/thebabydino/pen/JBrNEx" target="_blank">Ana Tudor</a></e></span></label><br/>
      <input type="radio" id="btn-neon" name="btn-type" value="neon-button" btn-text="add more"/>
      <label for="btn-neon">.neon-button<span className="cref">Neon button with animated border and reflection<e>by <a href="https://codepen.io/dschoni/pen/eYGrPNM" target="_blank">myself</a></e></span></label><br/>
    </form>
  </div>

  <div className="control-wrapper">
    <h2>Edges</h2>
    <form>
      <input type="radio" id="edge-none" name="do-edges" value="" checked/>
      <label for="edge-none">none</label><br/>
      <input type="radio" id="edge-smoothed" name="do-edges" value=" smoothed"/>
      <label for="edge-smoothed">smoothed</label><br/>
      <input type="radio" id="edge-rounded" name="do-edges" value=" rounded"/>
      <label for="edge-rounded">rounded</label><br/>
      <input type="radio" id="edge-round" name="do-edges" value=" round"/>
      <label for="edge-round">round</label><br/>
      <input type="radio" id="edge-elliptic" name="do-edges" value=" elliptic"/>
      <label for="edge-elliptic">elliptic</label><br/>
    </form>
  </div>

  <div className="control-wrapper">
    <h2>Font</h2>
    <form>
      <input type="radio" id="font-default" name="font-className" value="" checked/>
      <label className="font-view" for="font-default">default</label><br/>
      <input type="radio" id="font-open-sans" name="font-className" value=" font-open-sans"/>
      <label className="font-view" for="font-open-sans">Open-sans</label><br/>
      <input type="radio" id="font-consolas" name="font-className" value=" font-consolas"/>
      <label className="font-view" for="font-consolas">Consolas</label><br/>
      <input type="radio" id="font-oswald" name="font-className" value=" font-oswald"/>
      <label className="font-view" for="font-oswald">Oswald</label><br/>
      <input type="radio" id="font-patrick" name="font-className" value=" font-patrick"/>
      <label className="font-view" for="font-patrick">Patrick</label><br/>
      <input type="radio" id="font-bangers" name="font-className" value=" font-bangers"/>
      <label className="font-view" for="font-bangers">Bangers</label><br/>
      <input type="radio" id="font-quicksand" name="font-className" value=" font-quicksand"/>
      <label className="font-view" for="font-quicksand">Quicksand</label><br/>
      <input type="radio" id="font-calligraffitti" name="font-className" value=" font-calligraffitti"/>
      <label className="font-view" for="font-calligraffitti">Calligraffitti</label><br/>
    </form>
  </div>

  <div className="control-wrapper">
    <h2>Options</h2>
    <form>
      <input type="checkbox" id="uppercase" name="uppercase" value=" uppercase"/>
      <label for="uppercase"> Uppercase</label><br/>
      <input type="checkbox" id="striped" name="striped" value=" stripe"/>
      <label for="striped"> Stripes<span className="cref">Stripped Diagonal Button Single Border <e>by <a href="https://codepen.io/Zeindelf/pen/vZbyEg" target="_blank">Zeindelf</a></e></span></label><br/>
      <input type="checkbox" id="flip-stripes" name="flip-stripes" value=" flip-color"/>
      <label for="flip-stripes"> Invert stripes</label><br/>
      <input type="checkbox" id="breath" name="breath" value=" breath"/>
      <label for="breath"> Breath<span className="cref">neon-button <e>by <a href="https://codepen.io/PaulaJS/pen/gooQPg" target="_blank">Paula Joanna
              Sobczak</a></e></span></label><br/>
      <input type="checkbox" id="brightup" name="brightup" value=" brightup"/>
      <label for="brightup"> Neon bright up<span className="cref">Neon Button in HTML <e>by <a href="https://codepen.io/codingandstuff/pen/XWJvgpL" target="_blank">Coding
              And Stuff</a></e></span></label><br/>
      <input type="checkbox" id="glowed" name="glowed" value=" glowed"/>
      <label for="glowed"> Neon glow<span className="cref">Neon buttons <e>by <a href="https://codepen.io/andrewspin/pen/ZEGbJOo" target="_blank">AndrewSpin</a>
          </e></span></label><br/>

      <input type="checkbox" id="reflect" name="reflect" value=" reflection"/>
      <label for="reflect"> Reflection</label><br/>
      <hr/>
      <input type="checkbox" id="wide" name="wide" value=" btn--wide"/>
      <label for="wide"> Wide (50%)</label><br/>
      <input type="checkbox" id="oversize" name="oversize" value=" oversize"/>
      <label for="oversize"> Oversize</label><br/>
    </form>
  </div>
</div>

<div className="control-wrapper">
  <h2>Colors</h2>
  <form>
    <input type="radio" id="color-default" name="main-color" value="" checked/>
    <label className="Colors" for="color-default">default</label><br/>
    <hr/>
    <input type="radio" id="color-blank" name="main-color" value=" color-blank"/>
    <label className="Colors color-blank" for="color-blank">Blank!</label><br/>
    <input type="radio" id="color--black" name="main-color" value=" color--black"/>
    <label className="Colors color--black" for="color--black">Black</label><br/>
    <input type="radio" id="color-funny-yellow" name="main-color" value=" color-funny-yellow"/>
    <label className="Colors color-funny-yellow" for="color-funny-yellow">Funny-yellow</label><br/>
    <input type="radio" id="color--red" name="main-color" value=" color--red"/>
    <label className="Colors color--red" for="color--red">Red</label><br/>
    <input type="radio" id="color--blue" name="main-color" value=" color--blue"/>
    <label className="Colors color--blue" for="color--blue">Blue</label><br/>
    <input type="radio" id="color--tomato" name="main-color" value=" color--tomato"/>
    <label className="Colors color--tomato" for="color--tomato">Tomato</label><br/>
    <input type="radio" id="color--orangered" name="main-color" value=" color--orangered"/>
    <label className="Colors color--orangered" for="color--orangered">Orange Red</label><br/>
    <input type="radio" id="color--amber" name="main-color" value=" color--amber"/>
    <label className="Colors color--amber" for="color--amber">Amber</label><br/>
    <input type="radio" id="color--yellow" name="main-color" value=" color--yellow"/>
    <label className="Colors color--yellow" for="color--yellow">Yellow</label><br/>
    <input type="radio" id="color--green" name="main-color" value=" color--green"/>
    <label className="Colors color--green" for="color--green">Green</label><br/>
    <input type="radio" id="color--yellowgreen" name="main-color" value=" color--yellowgreen"/>
    <label className="Colors color--yellowgreen" for="color--yellowgreen">Yellow Green</label><br/>
    <input type="radio" id="color--teal" name="main-color" value=" color--teal"/>
    <label className="Colors color--teal" for="color--teal">Teal</label><br/>
    <input type="radio" id="color--teal2" name="main-color" value=" color--teal2"/>
    <label className="Colors color--teal2" for="color--teal2">Teal2</label><br/>
    <input type="radio" id="color--cyan" name="main-color" value=" color--cyan"/>
    <label className="Colors color--cyan" for="color--cyan">Cyan</label><br/>
    <input type="radio" id="color--royalslate" name="main-color" value=" color--royalslate"/>
    <label className="Colors color--royalslate" for="color--royalslate">Royal Slate</label><br/>
    <input type="radio" id="color--mediumpurple" name="main-color" value=" color--mediumpurple"/>
    <label className="Colors color--mediumpurple" for="color--mediumpurple">medium Purple</label><br/>
    <input type="radio" id="color--rebeccapurple" name="main-color" value=" color--rebeccapurple"/>
    <label className="Colors color--rebeccapurple" for="color--rebeccapurple">Rebeccapurple</label><br/>
    <hr/>
    <input type="radio" id="color-neon-red" name="main-color" value=" color-neon-red"/>
    <label className="Colors color-neon-red" for="color-neon-red">Neon Red</label><br/>
    <input type="radio" id="color-neon-blue" name="main-color" value=" color-neon-blue"/>
    <label className="Colors color-neon-blue" for="color-neon-blue">Neon Blue</label><br/>
    <input type="radio" id="color-neon-yellow" name="main-color" value=" color-neon-yellow"/>
    <label className="Colors color-neon-yellow" for="color-neon-yellow">Neon Yellow</label><br/>
    <input type="radio" id="color-neon-green" name="main-color" value=" color-neon-green"/>
    <label className="Colors color-neon-green" for="color-neon-green">Neon Green</label><br/>
    <hr/>
    <input type="radio" id="color-candy1" name="main-color" value=" color-candy1"/>
    <label className="Colors color-candy1" for="color-candy1">Candy 1</label><br/>
    <input type="radio" id="color-candy2" name="main-color" value=" color-candy2"/>
    <label className="Colors color-candy2" for="color-candy2">Candy 2</label><br/>
    <input type="radio" id="color-candy3" name="main-color" value=" color-candy3"/>
    <label className="Colors color-candy3" for="color-candy3">Candy 3</label><br/>
    <input type="radio" id="color-candy4" name="main-color" value=" color-candy4"/>
    <label className="Colors color-candy4" for="color-candy4">Candy 4</label><br/>
    <input type="radio" id="color-candy5" name="main-color" value=" color-candy5"/>
    <label className="Colors color-candy5" for="color-candy5">Candy 5</label><br/>
    <input type="radio" id="color-candy6" name="main-color" value=" color-candy6"/>
    <label className="Colors color-candy6" for="color-candy6">Candy 6</label><br/>
    <input type="radio" id="color-candy7" name="main-color" value=" color-candy7"/>
    <label className="Colors color-candy7" for="color-candy7">Candy 7</label><br/>
    <input type="radio" id="color-candy8" name="main-color" value=" color-candy8"/>
    <label className="Colors color-candy8" for="color-candy8">Candy 8</label><br/>
    <input type="radio" id="color-candy9" name="main-color" value=" color-candy9"/>
    <label className="Colors color-candy9" for="color-candy9">Candy 9</label><br/>
    <hr/>
    <input type="radio" id="color-gray" name="main-color" value=" color--gray"/>
    <label className="Colors color--gray" for="color-gray">Gray theme</label><br/>
    <input type="radio" id="color-freehand" name="main-color" value=" color-freehand"/>
    <label className="Colors color-freehand" for="color-freehand">Freehand theme</label><br/>
    <input type="radio" id="color-striped" name="main-color" value=" color-striped"/>
    <label className="Colors color-striped" for="color-striped">Striped theme</label><br/>
    <hr/>
    <input type="radio" id="color-gaming" name="main-color" value=" color-gaming"/>
    <label className="Colors color-gaming" for="color-gaming">Gaming theme</label><br/>
    <input type="radio" id="color-shopping" name="main-color" value=" color-shopping"/>
    <label className="Colors color-shopping" for="color-shopping">Shopping theme</label><br/>
    <input type="radio" id="color-codepen" name="main-color" value=" color-codepen"/>
    <label className="Colors color-codepen" for="color-codepen">Codepen theme</label><br/>
    <input type="radio" id="color-settings" name="main-color" value=" color-settings"/>
    <label className="Colors color-settings" for="color-settings">Settings theme</label><br/>
    <input type="radio" id="color-funny" name="main-color" value=" color-funny"/>
    <label className="Colors color-funny" for="color-funny">Funny theme</label><br/>
  </form>
</div>

<div className="control-column-3">

  <div className="control-wrapper">
    <h2>Size</h2>
    <form>
      <input type="radio" id="size-default" name="button-size" value="" checked/>
      <label for="size-default">default</label><br/>
      <input type="radio" id="size-small" name="button-size" value=" btn--small"/>
      <label for="size-small">small</label><br/>
      <input type="radio" id="size-normal" name="button-size" value=" btn--normal"/>
      <label for="size-normal">normal</label><br/>
      <input type="radio" id="size-large" name="button-size" value=" btn--large"/>
      <label for="size-large">large</label><br/>
      <input type="radio" id="size-xlarge" name="button-size" value=" btn--xlarge"/>
      <label for="size-xlarge">xlarge</label><br/>
      <input type="radio" id="size-xxlarge" name="button-size" value=" btn--xxlarge"/>
      <label for="size-xxlarge">xxlarge</label><br/>
    </form>
  </div>

  <div className="control-wrapper">
    <h2>Borderstyle</h2>
    <form>
      <input type="radio" id="border-default" name="border-style" value="" checked/>
      <label for="border-default">default</label><br/>
      <input type="radio" id="border-lined" name="border-style" value=" solid"/>
      <label for="border-lined">lined</label><br/>
      <input type="radio" id="border-dotted" name="border-style" value=" dotted"/>
      <label for="border-dotted">dotted</label><br/>
      <input type="radio" id="border-dashed" name="border-style" value=" dashed"/>
      <label for="border-dashed">dashed</label><br/>
    </form>
  </div>

  <div className="control-wrapper">
    <h2>Borderwidth</h2>
    <form>
      <input type="radio" id="border-def" name="border-width" value="" checked/>
      <label for="border-def">default</label><br/>
      <input type="radio" id="border-thin" name="border-width" value=" thin"/>
      <label for="border-thin">thin</label><br/>
      <input type="radio" id="border-normal" name="border-width" value=" normal"/>
      <label for="border-normal">normal</label><br/>
      <input type="radio" id="border-thick" name="border-width" value=" thick"/>
      <label for="border-thick">thick</label><br/>
    </form>
  </div>

  <div className="control-wrapper">
    <h2>Backgrounds</h2>
    <form>
      <input type="radio" id="bg-default" name="bg-view" value="" checked/>
      <label for="bg-default">none<span></span></label><br/>
      <input type="radio" id="bg-gradient-black" name="bg-view" value=" img-bg-gradient-black"/>
      <label className="bg-view" for="bg-gradient-black">Gradient Black<span className="img-bg-gradient-black"></span></label><br/>
      <input type="radio" id="bg-gradient-blue" name="bg-view" value=" img-bg-gradient-blue"/>
      <label className="bg-view" for="bg-gradient-blue">Gradient Blue<span className="img-bg-gradient-blue"></span></label><br/>
      <input type="radio" id="bg-gradient-gold" name="bg-view" value=" img-bg-gradient-gold"/>
      <label className="bg-view" for="bg-gradient-gold">Gradient Gold<span className="img-bg-gradient-gold"></span></label><br/>
      <input type="radio" id="bg-gradient-green" name="bg-view" value=" img-bg-gradient-green"/>
      <label className="bg-view" for="bg-gradient-green">Gradient Green<span className="img-bg-gradient-green"></span></label><br/>
      <input type="radio" id="bg-gradient-red" name="bg-view" value=" img-bg-gradient-red"/>
      <label className="bg-view" for="bg-gradient-red">Gradient Red<span className="img-bg-gradient-red"></span></label><br/>
      <input type="radio" id="bg-gradient-gray" name="bg-view" value=" img-bg-gradient-gray"/>
      <label className="bg-view" for="bg-gradient-gray">Gradient Gray<span className="img-bg-gradient-gray"></span></label><br/>
      <input type="radio" id="bg-gradient-brown" name="bg-view" value=" img-bg-gradient-brown"/>
      <label className="bg-view" for="bg-gradient-brown">Gradient Brown<span className="img-bg-gradient-brown"></span></label><br/>
      <hr/>
      Use with themes:
      <hr/>
      <input type="radio" id="bg-gaming" name="bg-view" value=" img-bg-gaming"/>
      <label className="bg-view" for="bg-gaming">Gaming<span className="img-bg-gaming"></span></label><br/>
      <input type="radio" id="bg-shopping" name="bg-view" value=" img-bg-shopping"/>
      <label className="bg-view" for="bg-shopping">Shopping<span className="img-bg-shopping"></span></label><br/>
      <input type="radio" id="bg-codepen" name="bg-view" value=" img-bg-codepen"/>
      <label className="bg-view" for="bg-codepen">Codepen<span className="img-bg-codepen"></span></label><br/>
      <input type="radio" id="bg-settings" name="bg-view" value=" img-bg-settings"/>
      <label className="bg-view" for="bg-settings">Settings<span className="img-bg-settings"></span></label><br/>
      <input type="radio" id="bg-funny" name="bg-view" value=" img-bg-funny"/>
      <label className="bg-view" for="bg-funny">Fun<span className="img-bg-funny"></span></label><br/>
    </form>
  </div>

  <div className="control-wrapper">
    <h2>Pictures</h2>
    <form>
      <input type="radio" id="img-default" name="img-view" value="" checked/>
      <label className="img-view" for="img-default">none</label><br/>
      <input type="radio" id="img-change" name="img-view" value="background-image: url('https://elnet.ch/sites/elnet.ch/files/inline-images/buttons/Change.jpg');"/>
      <label className="img-view" for="img-change">Change Settings</label><br/>
      <input type="radio" id="img-controls" name="img-view" value="background-image: url('https://elnet.ch/sites/elnet.ch/files/inline-images/buttons/Controls.jpg');"/>
      <label className="img-view" for="img-controls">Controls</label><br/>
      <input type="radio" id="img-fun" name="img-view" value="background-image: url('https://elnet.ch/sites/elnet.ch/files/inline-images/buttons/Fun.jpg');"/>
      <label className="img-view" for="img-fun">Fun in the air</label><br/>
      <input type="radio" id="img-party" name="img-view" value="background-image: url('https://elnet.ch/sites/elnet.ch/files/inline-images/buttons/Party-Fun.jpg');"/>
      <label className="img-view" for="img-party">Party Fun</label><br/>
      <input type="radio" id="img-gaming" name="img-view" value="background-image: url('https://elnet.ch/sites/elnet.ch/files/inline-images/buttons/Gaming.jpg');"/>
      <label className="img-view" for="img-gaming">Gaming</label><br/>
      <input type="radio" id="img-shopping" name="img-view" value="background-image: url('https://elnet.ch/sites/elnet.ch/files/inline-images/buttons/Shopping.jpg');"/>
      <label className="img-view" for="img-shopping">Shopping</label><br/>
    </form>
  </div>

</div>

<div className="control-column-4">

  <div className="control-wrapper">
    <h2>Icons</h2>
    <form>
      <input type="radio" id="icon-none" name="icons" value="" checked/>
      <label className="icn-view" for="icon-none">none</label><br/>
      <input type="radio" id="icon-gaming" name="icons" value=" icon-gaming"/>
      <label className="icn-view icon-gaming" for="icon-gaming">gaming</label><br/>
      <input type="radio" id="icon-wheel" name="icons" value=" icon-wheel"/>
      <label className="icn-view icon-wheel" for="icon-wheel">wheel</label><br/>
      <input type="radio" id="icon-glass" name="icons" value=" icon-glass"/>
      <label className="icn-view icon-glass" for="icon-glass">glass</label><br/>
      <input type="radio" id="icon-cloud" name="icons" value=" icon-cloud"/>
      <label className="icn-view icon-cloud" for="icon-cloud">cloud</label><br/>
      <input type="radio" id="icon-power" name="icons" value=" icon-power"/>
      <label className="icn-view icon-power" for="icon-power">power</label><br/>
      <input type="radio" id="icon-lock" name="icons" value=" icon-lock"/>
      <label className="icn-view icon-lock" for="icon-lock">lock</label><br/>
      <input type="radio" id="icon-clip" name="icons" value=" icon-clip"/>
      <label className="icn-view icon-clip" for="icon-clip">clip</label><br/>
      <input type="radio" id="icon-link" name="icons" value=" icon-link"/>
      <label className="icn-view icon-link" for="icon-link">link</label><br/>
      <input type="radio" id="icon-download" name="icons" value=" icon-download"/>
      <label className="icn-view icon-download" for="icon-download">download</label><br/>
      <input type="radio" id="icon-upload" name="icons" value=" icon-upload"/>
      <label className="icn-view icon-upload" for="icon-upload">upload</label><br/>
      <input type="radio" id="icon-paypal" name="icons" value=" icon-paypal"/>
      <label className="icn-view icon-paypal" for="icon-paypal">paypal</label><br/>
      <input type="radio" id="icon-codepen" name="icons" value=" icon-codepen"/>
      <label className="icn-view icon-codepen" for="icon-codepen">codepen</label><br/>
      <input type="radio" id="icon-cart" name="icons" value=" icon-cart"/>
      <label className="icn-view icon-cart" for="icon-cart">cart</label><br/>
      <input type="radio" id="icon-cart-add" name="icons" value=" icon-cart-add"/>
      <label className="icn-view icon-cart-add" for="icon-cart-add">cart-add</label><br/>
      <input type="radio" id="icon-print" name="icons" value=" icon-print"/>
      <label className="icn-view icon-print" for="icon-print">print</label><br/>
      <input type="radio" id="icon-arrow-right" name="icons" value=" icon-arrow-right"/>
      <label className="icn-view icon-arrow-right" for="icon-arrow-right">arrow-right</label><br/>
      <input type="radio" id="icon-archive" name="icons" value=" icon-archive"/>
      <label className="icn-view icon-archive" for="icon-archive">archive</label><br/>
      <input type="radio" id="icon-diamond" name="icons" value=" icon-diamond"/>
      <label className="icn-view icon-diamond" for="icon-diamond">diamond</label><br/>
      <hr/>self animated
      <hr/>
      <input type="radio" id="icon-folder" name="icons" value=" icon-folder"/>
      <label className="icn-view icon-folder" for="icon-folder">folder</label><br/>
      <input type="radio" id="icon-sun" name="icons" value=" icon-sun"/>
      <label className="icn-view icon-sun" for="icon-sun">sun</label><br/>
    </form>
  </div>

  <div className="control-wrapper">
    <h2>Icon Action</h2>
    <form>
      <input type="radio" id="icn-none" name="icn-anim" value="" checked/>
      <label for="icn-none">none</label><br/>
      <input type="radio" id="icn--shake" name="icn-anim" value=" icn--shake"/>
      <label className="icn-anim icon-arrow-right icn--shake" for="icn--shake">shake</label><br/>
      <input type="radio" id="icn--rubber" name="icn-anim" value=" icn--rubber"/>
      <label className="icn-anim icon-arrow-right icn--rubber" for="icn--rubber">rubber</label><br/>
      <input type="radio" id="icn--rotate" name="icn-anim" value=" icn--rotate"/>
      <label className="icn-anim icon-arrow-right icn--rotate" for="icn--rotate">rotate</label><br/>
      <input type="radio" id="icn--flip" name="icn-anim" value=" icn--flip"/>
      <label className="icn-anim icon-arrow-right icn--flip" for="icn--flip">flip</label><br/>
      <input type="radio" id="icn--turn" name="icn-anim" value=" icn--turn"/>
      <label className="icn-anim icon-arrow-right icn--turn" for="icn--turn">turn</label><br/>
      <input type="radio" id="icn--zoom" name="icn-anim" value=" icn--zoom"/>
      <label className="icn-anim icon-arrow-right icn--zoom" for="icn--zoom">zoom</label><br/>
    </form>
  </div>

  <div className="control-wrapper">
    <h2>Neon Action</h2>
    <form>
      <input type="radio" id="neon-none" name="neon-anim" value="" checked/>
      <label for="neon-none">none</label><br/>
      <input type="radio" id="neon-wrapped" name="neon-anim" value=" neon-wrapped"/>
      <label for="neon-wrapped">Wrap</label><br/>
      <input type="radio" id="neon-orbiter" name="neon-anim" value=" neon-orbiter"/>
      <label for="neon-orbiter">Orbit</label><br/>
      <input type="radio" id="neon-fused" name="neon-anim" value=" neon-fused"/>
      <label for="neon-fused">Fuse</label><br/>
      <input type="radio" id="neon-framed" name="neon-anim" value=" neon-framed"/>
      <label for="neon-framed">Frame</label><br/>
      <input type="radio" id="neon-dual" name="neon-anim" value=" neon-framed dual"/>
      <label for="neon-dual">Dual Color</label><br/>
    </form>
  </div>

</div>
</div>

    </div>
  )
}

export default Settings;