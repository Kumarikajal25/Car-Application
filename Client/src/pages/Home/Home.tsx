import TopSlide from "./TopSlide"
import BottomSlid from "./BottomSlid"
const Home = () => {
  return (
    <div className=" flex flex-col gap-4 bg-black">
        <div className="flex mt-36">
        <TopSlide/>
        </div>
      <div className=" flex  ">
       <BottomSlid/>
      </div>
      </div>
  )
}

export default Home