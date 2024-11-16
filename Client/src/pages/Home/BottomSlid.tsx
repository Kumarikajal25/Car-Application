
import { Button } from "../../components/ui/button"

const BottomSlid = () => {
  return (
    <div className="flex  justify-evenly  p-8">
    <div className=" flex w-1/3">
    <img src="speed.jpg" className=" object-contain ">
    </img>   
    </div>
  <div className="flex flex-col  gap-5 w-1/2  text-white">
  <span className=" text-5xl  mt-7">
  Discover the Thrill of Driving
</span>
<span className="  text-lg  text-neutral-500">
A seamless platform to manage, showcase, and organize car listings 
with images, descriptions, and tags, all under secure user accounts.</span>
<div className="flex ">
<Button  className=" flex    bg-yellow-700 ">
  <span className="   text-white  text-xl">{`Log In ->`} </span>
</Button>
</div>
 
   </div>   
  
</div>
  )
}

export default BottomSlid