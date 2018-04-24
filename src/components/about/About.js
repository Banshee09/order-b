import React from "react";

const About = (props) => {
    return (
        <div id="main">
            
            <h1 className="bg-primary resume-heading">
                <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>&nbsp;
                Contact Details
            </h1>

            <div className="well">
                <p><strong>Yiteng Feng</strong></p>
                <p><strong>Mobile: </strong>0406160200</p>
                <p><strong>Email: </strong>yiteng_sam@outlook.com</p>
            </div>


            <h1 className="bg-primary resume-heading">
                <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>&nbsp;
                Skills And Knowledge
            </h1>

            <div className="table-responsive">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Skill</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Web Basics</td>
                            <td>HTML, CSS, JavaScript, JQuery, Bootstrap</td>
                        </tr>
                        <tr>
                            <td>Advanced Web</td>
                            <td>ES6, React, Redux, Angular 1, Webpack, Babel, Axios</td>
                        </tr>
                        <tr>
                            <td>Java SE</td>
                            <td>Swing, AWT, CORBA, JNDI, JDBC, Thread</td>
                        </tr>
                        <tr>
                            <td>Java EE</td>
                            <td>Servlet, JSP, Hibernate, Spring Core, Spring MVC, Spring Boot, Structs2</td>
                        </tr>
                        <tr>
                            <td>Node.js</td>
                            <td>NPM, Express, Mongoose</td>
                        </tr>
                        <tr>
                            <td>Oracle Database</td>
                            <td>SQL, PL/SQL, Performance Tuning, Administration</td>
                        </tr>
                        <tr>
                            <td>Web Service</td>
                            <td>RESTful API</td>
                        </tr>
                        <tr>
                            <td>AWS</td>
                            <td>S3, Elastic Beanstalk</td>
                        </tr>
                        <tr>
                            <td>Source Control</td>
                            <td>CVS, GitHub</td>
                        </tr>
                        <tr>
                            <td>Miscellaneous</td>
                            <td>C/C++, PHP, Python, Shell Script, MySQL, MongoDB, Agile Methodology</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <h1 className="bg-primary resume-heading">
                <span className="glyphicon glyphicon-education" aria-hidden="true"></span>&nbsp;
                Education Experience
            </h1>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <p className="panel-title"><strong>Bachelor of Computer Science (Honours)</strong></p>
                            </div>
                            <div className="panel-body">
                                <p>Mar 2014 – Dec 2014</p>
                                <p>University of Wollongong</p>
                                <p>Thesis: Integrity Check in Cloud Computing</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <p className="panel-title"><strong>Bachelor of Computer Science</strong></p>
                            </div>
                            <div className="panel-body">
                                <p>Aug 2010 – Dec 2013</p>
                                <p>University of Wollongong</p>
                                <p>Major1: Enterprise Systems</p>
                                <p>Major2: Digital System Security</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <h1 className="bg-primary  resume-heading">
                <span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span>&nbsp;
                Working Experience
            </h1>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <p className="panel-title"><strong>Software Developer</strong></p>
                            </div>
                            <div className="panel-body">
                                <p>Jan 2013 – Aug 2016</p>
                                <p>Information Technology Services</p>
                                <p>University of Wollongong</p>
                                <p>Key responsibilities: Assisted the lecturer of Database subject to run laboratory classes and assessed the student assignments. The content of subject included relational model, database design, SQL, PL/SQL, Transaction, JDBC, etc.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <p className="panel-title"><strong>Database Tutor</strong></p>
                            </div>
                            <div className="panel-body">
                                <p>Aug 2012 – Oct 2012</p>
                                <p>School of Computing and Information Technology</p>
                                <p>University of Wollongong</p>
                                <p>Key responsibilities: Developed and maintained the desktop and web applications in Student Management Package, including Admissions, Fees and Subjects. I also supported the business owners and organized software rollouts occasionally.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <h1 className="bg-primary  resume-heading">
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;
                Referees
            </h1>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <p className="panel-title"><strong>Rongbo Du</strong></p>
                            </div>
                            <div className="panel-body">
                                <p>Java Team Leader</p>
                                <p>Development and Database Service</p>
                                <p>Information Technology Services</p>
                                <p>University of Wollongong</p>
                                <p><em>Contact details provided upon request</em></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <p className="panel-title"><strong>Tianbing Xia</strong></p>
                            </div>
                            <div className="panel-body">
                                <p>Senior Lecturer</p>
                                <p>School of Computing and Information Technology</p>
                                <p>Faculty of Engineering and Information Sciences</p>
                                <p>University of Wollongong</p>
                                <p><em>Contact details provided upon request</em></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <h1 className="bg-primary resume-heading">
                <span className="glyphicon glyphicon-link" aria-hidden="true"></span>&nbsp;
                Links
            </h1>

            <ul>
                <li><a href="https://github.com/Banshee09">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/feng-yiteng-69b823156/">LinkedIn</a></li>
            </ul>



        </div>
    );
};

export default About;