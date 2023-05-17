import Card from "./Card";
import Filter from "./Filter";
import "./all.css";
import Image1 from "./assets/account.svg";
import Image2 from "./assets/bg-header-desktop.svg";
import Image3 from "./assets/loop-studios.svg";
import Image4 from "./assets/insure.svg";
import Image5 from "./assets/eyecam-co.svg";
// import Image6 from "./assets/bg-header-mobile.svg";
import Image7 from "./assets/faceit.svg";
// import Image8 from "./assets/icon-remove.svg";
import Image9 from "./assets/manage.svg";
import Image10 from "./assets/myhome.svg";
function App() {
  const languages = ["JavaScript", "React", "HTML"];
  return (
    <div className="container">
      <div className="header">
        <img src={Image2} alt="" />
      </div>

      <Card
        imageSource={Image4} 
        imageAlt="image"
        h3="Photos"
        new="NEW"
        Featured="FEATURED"
        title="Senior Frontend Developer"
        days="1d ago"
        time="Full Time"
        option="USA only"
        newClass=""
        featureClass=""
        filterText={languages}
      />
      <Card
        imageSource={Image1}
        imageAlt="image"
        h3="Photosnap"
        new="NEW"
        Featured="FEATURED"
        title="Senior Frontend Developer"
        days="1d ago"
        time="Full Time"
        option="USA only"
        newClass=""
        featureClass="hide"
        filterText={languages}
      />
      <Card
        imageSource={Image3}
        imageAlt="image"
        h3="Photosnap"
        new="NEW"
        Featured="FEATURED"
        title="Senior Frontend Developer"
        days="1d ago"
        time="Full Time"
        option="USA only"
        newClass=""
        featureClass=""
        filterText={languages}
      />

      {/* <div className="wrapper" id="green">
        <div className="right">
          <Card
            imageSource={Image3}
            imageAlt="image"
            h3="Manage"
            new="NEW"
            Featured="FEATURED"
            title="Fullstack Developer"
            days="1d ago"
            time="Part Time"
            option="Remote"
            newClass=""
            featureClass=""
          />
        </div>
        <div className="left">
          <div>
            <Filter filterText="Fullstack" />
          </div>
          <div>
            <Filter filterText="Midweight" />
          </div>
          <div>
            <Filter filterText="Python" />
          </div>
          <div>
            <Filter filterText="React" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="right">
          <Card
            imageSource={Image10}
            imageAlt="image"
            h3="Account"
            new="NEW"
            Featured="FEATURED"
            title="Senior Frontend Developer"
            days="2d ago"
            time="Part Time"
            option="USA only"
            newClass=""
            featureClass="hide"
          />
        </div>
        <div className="left">
          <div>
            <Filter filterText="Frontend" />
          </div>
          <div>
            <Filter filterText="Junior" />
          </div>
          <div>
            <Filter filterText="React" />
          </div>

          <div>
            <Filter filterText="Sass" />
          </div>

          <div>
            <Filter filterText="JavaSript" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="right">
          <Card
            imageSource={Image4}
            imageAlt="image"
            h3="MyHome"
            new="NEW"
            Featured="FEATURED"
            title="Senior Frontend Developer"
            days="5d ago"
            time="Contract"
            option="USA only"
            newClass="hide"
            featureClass="hide"
          />
        </div>
        <div className="left">
          <div>
            <Filter filterText="Frontend" />
          </div>
          <div>
            <Filter filterText="junior" />
          </div>

          <div>
            <Filter filterText="CSS" />
          </div>
          <div>
            <Filter filterText="JavaScript" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="right">
          <Card
            imageSource={Image5}
            imageAlt="image"
            h3="Loop Studios"
            new="NEW"
            Featured="FEATURED"
            title="Software Engineer"
            days="1w ago"
            time="Full Time"
            option="Worlwide"
            newClass="hide"
            featureClass="hide"
          />
        </div>
        <div className="left">
          <div>
            <Filter filterText="Fullstack" />
          </div>
          <div>
            <Filter filterText="Midweight" />
          </div>
          <div>
            <Filter filterText="JavaScript" />
          </div>
          <div>
            <Filter filterText="Sass" />
          </div>
          <div>
            <Filter filterText="Ruby" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="right">
          <Card
            imageSource={Image7}
            imageAlt="image"
            h3="faceIt"
            new="NEW"
            Featured="FEATURED"
            title="Junior Backend Developer"
            days="1w ago"
            time="Full Time"
            option="UK only"
            newClass="hide"
            featureClass="hide"
          />
        </div>
        <div className="left">
          <div>
            <Filter filterText="Frontend" />
          </div>
          <div>
            <Filter filterText="Senior" />
          </div>
          <div>
            <Filter filterText="HTML" />
          </div>
          <div>
            <Filter filterText="CSS" />
          </div>
          <div>
            <Filter filterText="JavaScript" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="right">
          <Card
            imageSource={Image1}
            imageAlt="image"
            h3="Shortly"
            new="NEW"
            Featured="FEATURED"
            title="Junior Developer"
            days="1w ago"
            time="Full Time"
            option="Worldwide"
            newClass="hide"
            featureClass="hide"
          />
        </div>
        <div className="left">
          <div>
            <Filter filterText="Frontend" />
          </div>
          <div>
            <Filter filterText="Junior" />
          </div>
          <div>
            <Filter filterText="HTML" />
          </div>
          <div>
            <Filter filterText="Sass" />
          </div>
          <div>
            <Filter filterText="JavaScript" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="right">
          <Card
            imageSource={Image9}
            imageAlt="image"
            h3="Insure"
            new="NEW"
            Featured="FEATURED"
            title="Junior Frontend Developer"
            days="1w ago"
            time="Full Time"
            option="USA only"
            newClass="hide"
            featureClass="hide"
          />
        </div>
        <div className="left">
          <div>
            <Filter filterText="Frontend" />
          </div>
          <div>
            <Filter filterText="Junior" />
          </div>
          <div>
            <Filter filterText="Vue" />
          </div>
          <div>
            <Filter filterText="JavaScript" />
          </div>
          <div>
            <Filter filterText="Sass" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="right">
          <Card
            imageSource={Image5}
            imageAlt="image"
            h3="Eyecam Co."
            new="NEW"
            Featured="FEATURED"
            title="Full Stack Engineer"
            days="3w ago"
            time="Full Time"
            option="Worldwide"
            newClass="hide"
            featureClass="hide"
          />
        </div>
        <div className="left">
          <div>
            <Filter filterText="Fullstack" />
          </div>
          <div>
            <Filter filterText="Midweight" />
          </div>
          <div>
            <Filter filterText="JavaScript" />
          </div>
          <div>
            <Filter filterText="Django" />
          </div>
          <div>
            <Filter filterText="Python" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="right">
          <Card
            imageSource={Image3}
            imageAlt="image"
            h3="The Air Filter Company"
            new="NEW"
            Featured="FEATURED"
            title="Front-end Devr"
            days="1m ago"
            time="Part Time"
            option="Worldwide"
            newClass="hide"
            featureClass="hide"
          />
        </div>
        <div className="left">
          <div>
            <Filter filterText="Frontend" />
          </div>
          <div>
            <Filter filterText="Junior" />
          </div>
          <div>
            <Filter filterText="React" />
          </div>
          <div>
            <Filter filterText="Sass" />
          </div>
          <div>
            <Filter filterText="JavaScript" />
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default App;
