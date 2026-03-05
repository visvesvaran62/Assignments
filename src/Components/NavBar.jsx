import Button from "./Button"
import Logo from "./Logo"

  const NavBar=()=>{


    return(

        <>  
        <div className="navbar">
        <div>
            <Logo/>
        </div>
         <div>
        <h1>Jana Nayagan</h1>
       </div>
       <div className="about">
        <About/>
       </div>
       <div>
         <Button/>
       </div>
        </div> 
        </>
    )
}
export default NavBar

export const About=()=>{
   return(
    <>
    <a href="">Cast</a>
    <a href="">Production Company</a>
    <a href="">Release Date</a>
    <a href="">About</a>
    
    
    </>
   )
}