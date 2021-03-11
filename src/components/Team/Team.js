import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    // console.log(props);

    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;
    return (

        <div className="col-md-4 my-3">

            <Card className="text-center p-5">
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        Sports Type: {strSport}
                    </Card.Text>
                    <Link to={`/id/${idTeam}`}><Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Team;