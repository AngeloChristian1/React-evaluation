import "./All.css";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import MovieCard from "./movieCard";
import Avenger from "./assets/Avengers.jpg";
import Captain from "./assets/Captain.jpg";
import Tree from "./assets/Tree.jpg";

function App() {
  return (
    <>
      <div className="container">
        <div className="nav">
          <Sidebar />
        </div>
        <div className="mainContent">
          <div>
            <SearchBar placeholder="Search for movies and TV series" />
          </div>
          <div className="div">
            <div>
              <h3 className="whiteTitle">Trending</h3>
            </div>
            <div className="upperContent">
              <div>
                <MovieCard
                  backImage={Avenger}
                  movieClass=""
                  cardContentClass="moveUp"
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
                  cardContentClass="moveUp"
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
                  cardContentClass="moveUp"
                  year="2019"
                  category="Movie"
                  pg="PG"
                  movieName="Beyong Earth"
                />
              </div>
            </div>
            <div className="div2">
              <div>
                <h3 className="whiteTitle">Recommended for you</h3>
              </div>
              <div className="lowerContent">
                <div>
                  <MovieCard
                    backImage={Tree}
                    movieClass="small"
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
                    movieClass="small"
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
                    movieClass="small"
                    cardContentClass=""
                    year="2019"
                    category="Movie"
                    pg="PG"
                    movieName="Beyong Earth"
                  />
                </div>
                <div>
                  <MovieCard
                    backImage={Tree}
                    movieClass="small"
                    cardContentClass=""
                    year="2019"
                    category="Movie"
                    pg="PG"
                    movieName="Beyong Earth"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
