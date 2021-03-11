import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faFlag, faVenusMars, faClock } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import "./TeamDetails.css"

const TeamDetails = () => {

    const [team, setTeam] = useState([]);
    const { teamId } = useParams();

    const { strTeam, strSport, intFormedYear, strCountry, strGender, strTeamBadge, strTeamBanner, strFacebook, strTwitter, strYoutube } = team;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]));
    }, [teamId])
    return (
        <div className="container-fluid ">

            <img src={strTeamBanner} className="banner" alt="" />
            
            <div className="team-logo d-flex justify-content-center p-4 ">
                <img src={strTeamBadge} className="img-fluid" alt="" />
            </div>

            <div className="container bg-primary rounded mt-3">
                <div className="row">
                    <div className="col-md-6 my-3 text-white p-5">
                        <h1>{strTeam}</h1>
                        <h5><FontAwesomeIcon icon={faClock} /> Founded: {intFormedYear}</h5>
                        <h5><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
                        <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h5>
                        <h5><FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</h5>

                    </div>
                    <div className="col-md-6 my-3">
                        {
                            strGender === 'Male' ? <img className="img-fluid" src="/male.png" alt="" /> : <img className="img-fluid" src="/female.png" alt="" />
                        }
                    </div>
                </div>

            </div>

            <div className="container mt-5 text-white">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta fugiat mollitia architecto aut accusamus dolorum cupiditate, praesentium assumenda illo, laborum provident id minima quaerat voluptate consectetur sunt. Harum, expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quo hic accusamus, corporis magnam vero quibusdam inventore minima id iusto? Quisquam, possimus esse obcaecati molestias necessitatibus neque totam nulla quaerat.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quo hic accusamus, corporis magnam vero quibusdam inventore minima id iusto? Quisquam, possimus esse obcaecati molestias necessitatibus neque totam nulla quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quo hic accusamus, corporis magnam vero quibusdam inventore minima id iusto? Quisquam, possimus esse obcaecati molestias necessitatibus neque totam nulla quaerat.</p>
            </div>

            <footer>
                <div className=" m-5 icon d-flex justify-content-center">
                    <a target="blank" href={`https://${strTwitter}`}><FontAwesomeIcon icon={faTwitter} size="2x" /></a>

                    <a target="blank " href={`https://${strFacebook}`}><FontAwesomeIcon icon={faFacebook} size="2x" color="#3b5998" /></a>

                    <a target="blank " href={`https://${strYoutube}`}><FontAwesomeIcon icon={faYoutube} size="2x" color="red" /></a>
                </div>

            </footer>
        </div>


    );
};

export default TeamDetails;