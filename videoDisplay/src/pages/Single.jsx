// import React from "react";
import "../All.css";
import MainLayout from "../MainLayout";
import MovieCard from "../movieCard.jsx";
import Avenger from "../assets/Avengers.jpg";
import Record from "../assets/record.mp4";
import Record1 from "../assets/record1.mp4";

export default function Single() {
  return (
    <>
      <MainLayout>
        <div className="mainContent">
          <div className="movieHeading">
            <div>
              <h5>Movie: </h5>
            </div>
            <div>
              <h4>Avengers</h4>
            </div>
            <div>
              <p>:2021</p>
            </div>
          </div>
          {/* <div>
            <MovieCard
              backImage={Avenger}
              movieClass="bigCard"
              cardContentClass="moveLeft"
              year="2019"
              category="Movie"
              pg="PG"
              movieName="Beyong Earth"
            />
          </div> */}
          <div className="video">
            <video controls width="100%">
              {" "}
              <source src={Record1} type="video/mp4" />
              <source src={Record1} type="video/webm" />
              Sorry cant be displayed
            </video>
          </div>
          <div className="description">
            <div>
              <h3>Description</h3>
            </div>
            <div>
              <p width="200px">
                After the events of the previous avengers, The universe is in
                ruins. with help of remaining allies, the Avengers assemble
                again in order to stop Thanos whose aim is to eradicate life as
                we see it and restore the order of the universe. But will they
                succeed
              </p>
            </div>
            <div className="director">
              <div>
                <h4>Director: </h4>
              </div>
              <div>
                <p>Antony and Joe Russo</p>
              </div>
            </div>
            <div className="cast">
              <div>
                <h4>Cast: </h4>
              </div>
              <div>
                <p>
                  Scarlett Johanson, Robert Downey Jr, Chris Evans, Mark
                  Rufallo, Jeremy Renner, Josh Brolin, Karen Gillan, Paul Rudd,
                  Tom Holland, Tessa Thompson, Gywenth Paltwol
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>Browse More</h3>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
