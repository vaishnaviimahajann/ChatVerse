import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
import {v1 as uuidv1} from "uuid";

function Sidebar(){
  const { allThreads, setAllThreads, currThreadId ,setNewChat , setPrompt , setReply , setCurrThreadId , setPrevChtas} = useContext(MyContext);

  const getAllThreads = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/chat/threads");
        const res = await response.json();

        const filterdData = res.map(thread => ({ threadId : thread.threadId , title : thread.title}))
        console.log(filterdData);
        setAllThreads(filterdData);

        // thread id , title

       
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllThreads();
  }, []);

      const createNewChat = ()=>{
        setNewChat(true);
        setPrompt(" ");
        setReply(null);
        setCurrThreadId(uuidv1());
        setPrevChats([]);
      }

    return (
         <section className="sidebar">

        <button onClick={createNewChat}>
             <img src="src/assets/blacklogo.png" alt="gptlogo" className="logo"></img>
              <span>
                   <i className="fa-solid fa-pen-to-square"></i>
              </span>
        </button>

          <ul className="history">
            {
              allThreads?.map((thread, idx)=>(
                <li key={idx}>{thread.title}</li>
              ))
            }
          </ul>

          <div className="sign">
            <p>by Vaishnavi Mahajan &hearts;</p>
          </div>
         </section>
    )
}
export default Sidebar;