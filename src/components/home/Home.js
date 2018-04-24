import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Table } from 'react-bootstrap';

const Home = (props) => {
    return (
        <div id="main">
            <Jumbotron >
                <div className="container">
                    <h1>Make Orders Online</h1>
                    <p>
                        The system is designed to simply the order process in restaurants or stores.
                </p>
                    <p><Button bsSize="large" bsStyle="primary" componentClass={Link} href="/categories" to="/categories">Explore</Button></p>
                </div>
            </Jumbotron>

            <p>
                It consists of three projects: order-api, order-b and order-c, which will be avaiable in Git Hub.
                The main techonology used in this system is shown in the table below. For more details about my skills and experiecne,
                please refer to <Link to={"/about"}>About Me</Link> page.
            </p>
            <br />

            <Table responsive striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Component</th>
                        <th>Key Tech</th>
                        <th>Deployment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Frontend</td>
                        <td>React, Redux, Bootstrap(React-Bootstrap), SCSS</td>
                        <td>AWS S3</td>
                    </tr>
                    <tr>
                        <td>Backend</td>
                        <td>Java, Spring Boot, Spring MVC, Spring Core, Spring Data JPA(Hibernate)</td>
                        <td>AWS Elastic Beanstalk</td>
                    </tr>
                    <tr>
                        <td>Database</td>
                        <td>MySQL</td>
                        <td>AWS RDS</td>
                    </tr>
                </tbody>
            </Table>
        </div>

    );
};

export default Home;