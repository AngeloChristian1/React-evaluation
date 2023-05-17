import MainLayout from "../MainLayout";
import "../All.css";
import MovieCard from "../movieCard";
import Avenger from "../assets/Avengers.jpg";
import Captain from "../assets/Captain.jpg";
// import Tree from "../assets/Tree.jpg";

export default function Bookmarked() {
  return (
    <>
      <MainLayout>
        <div
          className="mainContent"
          // style={{ backgroundColor: "white" }}
        >
          <div>
            <h3 className="whiteTitle">Bookmarked Movies</h3>
          </div>
          <div>
            <p className="whiteText">
              Your favourite bookmarked movies and series will be saved here so
              that you can easily access them
            </p>
          </div>
          <div className="upperContent">
            <div>
              <MovieCard
                backImage={Avenger}
                movieClass=""
                cardContentClass=""
                year="2019"
                category="Movie"
                pg="PG"
                movieName="Beyong Earth"
              />
            </div>
            <div>
              <MovieCard
                backImage={Captain}
                movieClass=""
                cardContentClass=""
                year="2019"
                category="Movie"
                pg="PG"
                movieName="Beyong Earth"
              />
            </div>
            <div>
              <MovieCard
                backImage={Avenger}
                movieClass=""
                cardContentClass=""
                year="2019"
                category="Movie"
                pg="PG"
                movieName="Beyong Earth"
              />
            </div>
            <div>
              <MovieCard
                backImage={Avenger}
                movieClass=""
                cardContentClass=""
                year="2019"
                category="Movie"
                pg="PG"
                movieName="Beyong Earth"
              />
            </div>
            <div>
              <MovieCard
                backImage={Avenger}
                movieClass=""
                cardContentClass=""
                year="2019"
                category="Movie"
                pg="PG"
                movieName="Beyong Earth"
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
