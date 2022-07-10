import Image from "next/image";
import React from "react";
import Card from "../components/Card/Card";
import LinksContainer from "../components/LinksContainer/Links";

function Home(props) {
  return (
    <div className='home'>
      <Card />
      <LinksContainer />
      <div className="box">
        {/* <Image src={"/image.jpg"} layout="fill" /> */}
        <video src="video2.mp4" autoPlay muted loop></video>
      </div>
    </div>
  );
}

export default Home;
