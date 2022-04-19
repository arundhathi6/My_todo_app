// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState,useEffect} from "react";
// import axios from "axios";
// import "./Modal.css";
// import "./Todo.css";

// export default function TodoEditz() {
//   const [modal, setModal] = useState(false);
//   const { todoid } = useParams();
//   const [txt, settxt] = useState();
//   const [dt, setDt] = useState();
//   const navigate = useNavigate();
//   const [upt,setUpt] = useState()
//   useEffect(()=>{
 
//   },[upt])

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   if (modal) {
//     document.body.classList.add("active-modal");
//   } else {
//     document.body.classList.remove("active-modal");
//   }
//   axios.patch(`https://my-todo-react-app-01.herokuapp.com/todo/${todoid}`, { title: txt,date:dt })
//   return (
//     <>
//       <button onClick={toggleModal} className="btn-modal">
//         Open
//       </button>

//       {modal && (
//         <div className="modal">
//           <div onClick={toggleModal} className="overlay"></div>
//           <div className="modal-content">
//           <div className="allthree">
//       <input
//        className="inputitem_one"
//         type="text"
//         placeholder="change title"
//         onChange={(e) => settxt(e.target.value)}
//       />
//       <input
//     className="inputdate_one"
//     type="date"
//     onChange={(e) => setDt(e.target.value)}
//   />
//       <button className="updatebtn" onClick = {()=>{
  
//   if(dt){
 
//     navigate(-1)
//     setUpt(upt+1) 
//   }
//   else{
//     window.confirm("set the date of completion to continue..")
//    }
//       }}>Update</button>
//       </div>

//             <button className="close-modal" onClick={toggleModal}>
//               CLOSE
//             </button>
//           </div>
//         </div>
//           )}
          
    
//     </>
//   );
// }
