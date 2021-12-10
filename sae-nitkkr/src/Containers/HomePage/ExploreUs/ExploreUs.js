import "./ExploreUs.css";

function ExploreUs() {
  return (
    <div id="ExploreUs-root">
      <h1 className="ExploreUs-heading">EXPLORE US</h1>

      <div className="ExploreUs-Container">
        <div className="ExploreUs-box">
          <Card text="GALLERY" />
        </div>
        <div className="ExploreUs-box">
          <Card text="CONTACT US" />
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="ExploreUs-box">
      <div className="ExploreUs-box1">
        <h2 className="ExploreUs-text">{props.text}</h2>
      </div>
    </div>
  );
}

export default ExploreUs;