import "./Chatwindow.css";
import Chat from "./Chat.jsx"
function Chatwindow(){
    return (
          <div className="chatwindow">
                <div className="navbar">
                   <span>ChatVerse <i className="fa-solid fa-chevron-down"></i>  </span>
                       <div className="usericondiv">
                          <span className="usericon"><i className="fa-solid fa-user"></i></span>
                       </div>
                </div>

                <chat> </chat>

                <div className="chatinput">
                     <div className="inputbox">
                        <input placeholder="Ask Anything"></input>
                        <div id="submit">
                        <i className="fa-solid fa-paper-plane"></i>
                        </div>
                     </div>
                     <p className="info">
                        ChatVerse can Make mistakes . Check important info . see Cookie Preferences
                     </p>

                </div>

          </div>
    )
}
export default Chatwindow;