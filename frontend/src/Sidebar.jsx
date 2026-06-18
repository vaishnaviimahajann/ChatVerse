import "./Sidebar.css";
function Sidebar(){
    return (
         <section className="sidebar">

          {/* new chat button*/}
        <button>
             <img src="src/assets/blacklogo.png" alt="gptlogo" className="logo"></img>
              <span>
                   <i className="fa-solid fa-pen-to-square"></i>
              </span>
        </button>

          {/* history*/}
          <ul className="history">
            <li> history 1</li>
            <li> history 1</li>
            <li> history 1</li>
          </ul>


          {/* sign*/}
          
          <div className="sign">
            <p>by Vaishnavi Mahajan &hearts;</p>
          </div>
         </section>
    )
}
export default Sidebar;