import React from "react";
import "./styles.css"

const App =()=>{
   function handleClick(){
   document.getElementById("navbutton").classList.toggle("sideMenu")
   document.getElementById("theme").classList.toggle("themeEdit")
document.getElementById("cardBody").classList.toggle("cardEdit")
document.getElementById("ending").classList.toggle("endSearch")
    }

  function clicked(){
    console.log("clicked")
  
  var element = document.getElementById('value')
  if(element.innerHTML === "Use Dark Theme" ){
   element.innerHTML="Use Light Theme"
   document.getElementById("navbutton").style.transition="none"
   document.getElementById("bodyId").style.backgroundColor="black"
   document.getElementById("bodyId").style.color="white"
   document.getElementById("cardBody").style.background="#222327"
   document.getElementById("footerEnd").style.color="#c4c7c5"
   document.getElementById("cardInsider").style.backgroundColor="black"
   document.getElementById("cardWords").style.color="white"
   document.getElementById("searchBar").classList.add("searchStyle")
   document.getElementById("mainNav").style.backgroundColor="black"
   document.getElementById("ending").style.backgroundColor="#222327"
  }
  else{
    element.innerHTML="Use Dark Theme"
    document.getElementById("navbutton").style.transition="none"
    document.getElementById("bodyId").style.color="grey"
    document.getElementById("bodyId").style.backgroundColor="white"
    document.getElementById("cardBody").style.backgroundColor="#f3f6fc"
    document.getElementById("footerEnd").style.color=" #444746"
    document.getElementById("cardInsider").style.backgroundColor="white"
   document.getElementById("cardWords").style.color="black"
    document.getElementById("searchBar").classList.remove("searchStyle")
    document.getElementById("mainNav").style.backgroundColor="white"
    document.getElementById("ending").style.backgroundColor="#f3f6fc"
  
  }
  }
    return(
        <>
        {/* --------------------Header Section ------------------ */}
      
        <nav class="navbar nav-expand-lg fixed-top" id="mainNav" style={{paddingBottom:"0",backgroundColor:"white"}}>
  <div class="container-fluid"> 
    <span class="navbar-brand " >
    <svg xmlns="http://www.w3.org/2000/svg" id="svgNav" style={{marginLeft:"10px"}} onClick={handleClick} viewBox="0 0 448 512"><path fill="#525256" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    </span>
    <div className="me-auto">
    <span className="navFont" style={{marginTop:"5px"}}>Bard
  </span>
  <p className="navFontP text-primary">Experiment</p>
    </div>
    
   
  <div className="d-flex me2 "><span className="me-3"><img  style={{width:"20px",height:"20px"}} src="https://cdn3.iconfinder.com/data/icons/faticons/32/grid-2-01-1024.png" alt="grid"/></span>
 <span className="me-1"><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"  style={{width:"30px", borderRadius:"50px"}} alt="profile"/></span> 
  </div>
  </div>
</nav>
       
          
       {/* -----------------------BODY SECTION ---------------------------------- */}
    
            <div  id="navbutton" style={{ display:"inline-block",fontFamily:"sans-serif", fontSize:"16px",paddingRight:"4%", }}>
         <ul class="navbar-nav">
          <li style={{paddingLeft:"20px", paddingTop:"10px", paddingBottom:"10px"}} >
          <span class="nav-link disabled" style={{color:"grey",}}><svg xmlns="http://www.w3.org/2000/svg" style={{width:"20px",opacity:"0.5",marginRight:"20px"}} viewBox="0 0 512 512"><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
          Reset chat</span>  
        </li>
        <li class="nav-item" >
        <a class="nav-link " href="/"><svg xmlns="http://www.w3.org/2000/svg" style={{width:"20px",marginRight:"20px"}} viewBox="0 0 512 512"><path  d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/></svg>
        Bard activity</a>
      
        </li>
        <li className="nav-item" >
          <a className="nav-link" href="/"><svg xmlns="http://www.w3.org/2000/svg"style={{width:"20px",marginRight:"20px"}} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>FAQ</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="/"><svg xmlns="http://www.w3.org/2000/svg" style={{width:"20px",marginRight:"20px"}} viewBox="0 0 512 512"><path d="M160 0c13.3 0 24 10.7 24 24V64H328V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V192 144 128c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24zM432 192H80V448c0 8.8 7.2 16 16 16H416c8.8 0 16-7.2 16-16V192zM328 352H184c-13.3 0-24-10.7-24-24s10.7-24 24-24H328c13.3 0 24 10.7 24 24s-10.7 24-24 24z"/></svg>Updates</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="/"><svg xmlns="http://www.w3.org/2000/svg"  style={{width:"20px",marginRight:"20px"}} viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg> Help</a>
        </li>
       
      </ul>
      
      <ul class="navbar-nav" style={{marginTop:"200px"}}>
        <hr style={{width:"190px",marginBottom:"10px"}}/ >
      <li className="nav-item" id="theme"onClick={clicked} style={{paddingTop:"25px"}}  ><svg xmlns="http://www.w3.org/2000/svg"style={{width:"15px",marginRight:"15px"}} viewBox="0 0 384 512"><path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/></svg>
     <p style={{display:"inline-block", cursor:"pointer"}} id="value" >Use Dark Theme</p> </li>
      </ul>
            </div>
            
            <div id="cardBody" style={{backgroundColor:"#f3f6fc"}}>
             <div className="cardInside" id="cardInsider" style={{backgroundColor:"white"}} >
              <div style={{float:"left"}} >
                <img src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_1ff6f6a71f2d298b1a31.gif" style={{width:"45px",paddingRight:"10px",}} alt="star"/>
                </div>
                <div style={{display:"flex", flexDirection:"column", marginTop:"0",overflow:"hide"}}>
             <div id="cardWords" style={{color:"black", }} >
             <h6 className="cardLetters" style={{display:"inline"}} >I'm Bard, your creative and helpful collaborator. I have limitations and won't always get it right, but your feedback will help me to improve.</h6>
            <br/><br/>
            <h6 className="cardLetters" style={{marginTop:"10px"}} >Not sure where to start? You can try:</h6>
            </div>
            <a href="/" className="anchorTag" style={{paddingTop:"15px"}}>Write some lyrics for a heartbreak anthem titled "Lovesick" </a>
            
            <a href="/" className="anchorTag">Tell me about the code within the google/ajax Github repo</a>
          
            <a href="/" className="anchorTag">I want write a novel. How can i get started?</a>
            </div>
            </div>
            
            <div id="ending" style={{position:"fixed",bottom:"15px" ,right: "50px",paddingTop:"20px"}}>
              <input type="text"  name="search" class="form-control" id="searchBar" placeholder="Enter a prompt here" /><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="micImage"><path fill="#2f3031" d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>
              <img src="https://static.thenounproject.com/png/4579062-200.png" className="sendArrow" alt="send arrow"/>
              <p id="footerEnd" className="footer" style={{color: "rgb(68, 71, 70)"}}>Bard may display inaccurate or offensive information that doesn't represent Google's views.</p>
              </div>
            </div>
       </>
       )
    }
export default App