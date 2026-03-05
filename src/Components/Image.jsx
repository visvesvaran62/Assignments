import image1 from "../assets/images/1.1.jpg"
import image2 from "../assets/images/1.2.jpg"
import image4 from "../assets/images/4.jpg"
import image5 from "../assets/images/5.jpg"
import image6 from "../assets/images/6.jpg"
const Image=()=>{
    return(
        <><div className="posters">
          <img src={image1} />
        <img src={image2} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        </div>
     
        </>
    )
}
export default Image;