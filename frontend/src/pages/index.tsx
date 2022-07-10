import Card from "../components/Card/Card";
import LinksContainer from "../components/LinksContainer/Links";

function Home() {
  return (
    <div className="home">
      <Card />
      <LinksContainer />
      <div className="box">
        <iframe
          src="https://my.spline.design/untitled-1b069e49f901b45893e3a276df5a45d6/"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
