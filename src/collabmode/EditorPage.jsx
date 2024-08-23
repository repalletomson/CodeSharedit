import React, { useState ,useRef,useEffect} from 'react'
import Client from '../components/Client'
import EditorSpace from '../components/EditorSpace'
import { useLocation,useNavigate,Navigate } from 'react-router-dom';
import { initSocket } from '../socket';
import { useParams } from 'react-router-dom';
import ACTIONS from '../Actions'
import {toast} from "react-hot-toast"
import useLocalStorage from '../hooks/useLocalStorage';

function EditorPage() {
  const {roomID}=useParams()
  const socketRef=useRef(null);
  const codeRef=useRef(null);
  const location = useLocation();
  const reactNavigator=useNavigate();
  const [js,setjs]=useLocalStorage('js','')

  const [clients,setClient]=useState([])
  
  useEffect(() => {
    const init = async () => {
        socketRef.current = await initSocket();
        socketRef.current.on("connect_error",(err)=>handleErrors(err));
        socketRef.current.on("connect_failed",(err)=>handleErrors(err));
  function handleErrors(e){
    console.log("socket error",e);
    toast.error('Socket connection failed , try again later')
    reactNavigator('/collabmode')
  }
        socketRef.current.emit(ACTIONS.JOIN,{
          roomID,
          username:location.state?.username
        }) 

      // Listening for joined event
      socketRef.current.on(ACTIONS.JOINED,({clients,username,socketId})=>{
         if (username!==location.state?.username){
            toast.success(`${username} joined in the room`)
           console.log(`${username} joined`)
          }
          setClient(clients);
          socketRef.current.emit(ACTIONS.SYNC_CODE, {
            code: codeRef.current,
            socketId,
        });
      })
      // deleting the user
      socketRef.current.on(
        ACTIONS.DISCONNECTED,
        ({ socketId, username }) => {
          // console.log(username);
            toast.success(`${username} left the room.`);
            setClient((prev) => {
                return prev.filter(
                    (client) => client.socketId !== socketId
                );
            });
        }
      );

    }
    init();
    
    return ()=>{
     socketRef.current.disconnect()
     socketRef.current.off(ACTIONS.JOINED)
     socketRef.current.off(ACTIONS.DISCONNECTED);  
  }
}, []);


// Copy room id
async function copyRoomId(){
  try{

    navigator.clipboard.writeText(roomID);
    toast("Room id copyed successfully")
  }
  catch(e){
    console.log("error",e);
  }
} 
// Leave room 
function leaveRoom(){
  reactNavigator('/collabmode')
}

if (!location.state){
  return <Navigate to="/collabmode"/>
}

  return (
    <div className='mainWrap h-screen  bg-dark-1'>
     <div className='aside h-full ' >
      <div className='asideInner'>
        <div className='mb-10'>
      <h1 className='px-10 font-bold text-white text-2xl pr-11 border-b '> CodeSharedit </h1>
        </div>
        <h3 className='mb-6'> Connected..</h3>
        <div className='clientsList'>
           {
            clients.map((client)=>(
              <Client key={client.socketId} user={client.username} />
            ))
           }
        </div>
      </div>
      <button className='btn text-dark-1 copyBtn bg-dark-4' onClick={copyRoomId}>Copy Room ID</button>
      <button className='btn leaveBtn'onClick={leaveRoom}>Leave Room</button>
     </div>

       <div className='editorwrap'>
             <EditorSpace 
             socketRef={socketRef}
             roomID={roomID}
             onCodeChange={(code) => {
              codeRef.current = code;

          }}
          value={js} 
          onChange={setjs}/>
       </div>
    </div>
  )
}

export default EditorPage;