import React from "react";
import MainLayout from "../MainLayout";
import MovieCard from "../movieCard";
import Avenger from "../assets/Avengers.jpg";
import Captain from "../assets/Captain.jpg";
import Tree from "../assets/Tree.jpg";
import Filter from "../Filter.jsx";

export default function MoviesPage() {
  return (
    <>
      <MainLayout>
        <div className="mainContent">
          <div>Movie Page</div>
          <div className="filterList">
            <div>
              <Filter filterClass="filter" filterValue="Recent" />
            </div>
            <div>
              <Filter filterClass="filter" filterValue="Recent" />
            </div>
            <div>
              <Filter filterClass="filter" filterValue="Recent" />
            </div>
            <div>
              <Filter filterClass="filter" filterValue="Recent" />
            </div>
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
      </MainLayout>
    </>
  );
}
