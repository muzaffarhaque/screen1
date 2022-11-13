
import './App.scss';
import Nevbar from "./component/nevbar/Nevbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'




const data=[
  {name:"Dhiraj Saxsena",price:"243"}, 
   {name:"Subhash Mishra",price:"456"},  
   {name:"Subhash Mishra",price:"456"},  
   {name:"Subhash Mishra",price:"456"},  
   {name:"Subhash Mishra",price:"456"},  
   {name:"Subhash Mishra",price:"456"},  
  
]
function App() {


  let curr=new Date()
  let date=`${curr.getDate()} ${curr.getMonth()} ${curr.getFullYear()}}`
  return (
    <div className="App">
 <Nevbar/>

<div className="main-container">
  <h6>UI/UX &gt; Refer & Earn &gt; Friends Referred </h6>
  <div className="back-forword"><FontAwesomeIcon icon={faArrowLeft}/> Go back</div>
  <div className="acount-datails">
    <div className="box">
      <p>Your Referral Code </p>
      <div>EDCH54</div>
    </div>
    <div className="box">
      <p>Wallet Balance</p>
      <div>₹ 500</div>
    </div>
  </div>
  <h4>Friends who enrolled<span>(3)</span></h4>


<div className="card-container">

  {data.map((item,i)=>{
    return(
      <div className="neame-card">
      <div className='child'>
        <h4>Dhiraj Saxsena</h4>
        <p>15 Sep, 2022</p>
      </div>
      <div className='child'>Courses Enrolled(6)</div>
      <div className='child'>
        <span>UX design</span>
        <span>UX/UI</span>
        <span>UX design</span>
        <span>UX design</span>
        <span>UX design</span>
     
        
      </div>
      <div className='child'>Referral Amount <span>₹185</span></div>
  
    </div>
    )
  })}
 


</div>


<h4>Terms & Conditions</h4>





</div>





    </div>
  );
}

export default App;
