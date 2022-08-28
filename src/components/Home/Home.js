import React, { useEffect, useState } from "react";
import Team from "../Team/Team";
import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  });
  return (
    <div className="">
      <div className="img-banner">
        <img className="img-fluid h-5 w-100" src="/banner.png" alt="" />
      </div>
      <div className="heading ">
        <h4 className="text-center">UEFA Champions League</h4>
      </div>

      <div className="container-fluid ">
        <h4 className="text-white text-center mt-5">
          Total Team: {teams.length}
        </h4>
        <div className="row p-5">
          {teams.map((team) => (
            <Team key={team.idTeam} team={team}></Team>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
