import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CallButton from "./components/CallButton";
import CallText from "./components/CallText";

function App() {
  return (
    // <div className="flex justify-between gap-x-4 lg:px-40 xl:px-60 2xl:px-96"> 
    //   <div className="">
    //     <Header />
    //     <div className="flex flex-wrap justify-between gap-x-2 gap-y-4">
    //       <Card />
    //       <Card />
    //       <Card />
    //       <Card />
    //       <Card />
    //       <Card />
    //     </div>
    //   </div>
    //   <div className="sticky flex max-h items-center px-2">
    //     <Navbar />
    //   </div>  
    // </div>

    <div className="px-40 py-20">
      <div className="flex">

        <div className="flex">
          <p className="text-4xl">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. 
          </p>

          <div className="pt-20">
            <CallButton />
            <CallText />
          </div>
        </div>
      
      
      
      </div>
    </div>
  );
}

export default App;
