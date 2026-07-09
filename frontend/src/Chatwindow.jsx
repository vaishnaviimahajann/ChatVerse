import "./Chatwindow.css";
import Chat from "./Chat.jsx"
import { MyContext } from "./MyContext.jsx";
import { useContext , useState , useEffect} from "react";
import {ScaleLoader} from "react-spinners";

function Chatwindow(){
   const{prompt , setPrompt , reply , setReply , currThreadId,prevChats,setPrevChats,setNewChat} = useContext(MyContext);
   const [loading , setLoading] = useState(false);
   const [isOpen , setIsOpen] = useState(false);

   const getReply = async ()=>{
      setLoading(true);
      setNewChat(false);

      const options = {
      method: "POST",
      headers : {
         "Content-Type":"application/json"
      },
      body:JSON.stringify({
         message : prompt,
         threadId : currThreadId
      })
   };
   try{
     const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, options);
     const res= await response.json();
     console.log(res);
     setReply(res.reply);

   }catch(err){
      console.log(err);
   }
   setLoading(false);
}

//append  new chat to prev chat
useEffect(()=>{
   if(prompt &&  reply){
        setPrevChats(prevChats =>{
         return [...prevChats,{
            role: "user",
            content : prompt
         },{
            role:"assistant",
            content:reply
         }]
        })
   }
   setPrompt("");
},[reply]);


const handleprofileclick = () =>{
      setIsOpen(!isOpen);
}
    return (
          <div className="chatwindow">
                <div className="navbar">
                   <span>ChatVerse <i className="fa-solid fa-chevron-down"></i>  </span>
                       <div className="usericondiv" onClick={handleprofileclick}>
                          <span className="usericon"><i className="fa-solid fa-user"></i></span>
                       </div>
                </div>

                {
                  isOpen && 
                     <div className="dropdown">
                         <div className="dropdownitem"><i className="fa-solid fa-gear"></i>Settings</div>
                         <div className="dropdownitem"><i className="fa-solid fa-cloud-arrow-up"></i>Upgrade Plans</div>
                           <div className="dropdownitem"><i className="fa-solid fa-arrow-right-from-bracket"></i>Log-out</div>
                        
                     </div>
                }

                <Chat> </Chat>
                <ScaleLoader color="#fff" loading={loading}>

                </ScaleLoader>

                <div className="chatinput">
                     <div className="inputbox">
                        <input placeholder="Ask Anything"
                            value={prompt}
                            onChange={(e)=>setPrompt(e.target.value)}
                            onKeyDown={(e)=>e.key === 'Enter'? getReply() :''}
                          ></input>
                             
                        <div id="submit" onClick={getReply}>
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