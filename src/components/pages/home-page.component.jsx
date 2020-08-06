import React from 'react';
import {Link} from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import logo from '../../assets/vectors/logo.svg';
import icEngage from '../../assets/vectors/ic_engage.svg';
import icInspire from '../../assets/vectors/ic_inspire.svg';
import icLearn from '../../assets/vectors/ic_learn.svg';
import logoGps from '../../assets/vectors/gps_logo.svg';


export const HomePage = (props) => {

    return (
        <div>

            <section id="home" className="hero-parallax parallax-slider">
                <div className="ms-hero-copy ms-title">
                    <ReactSVG src={ logo } className="homeVector" alt="Humanity Lab Foundation" />
                    <h3>We provide tools, access, and opportunities to enable people to be the change they wish to see in the world.</h3>
                </div>
            </section>

            <main className="container" style={{maxWidth: '100%'}}>
                <section id="aboutus" className="ms-services ghost-bg">
                    <div className="ms-title">
                        <p>The Humanity Lab Foundation is a multi-program platform that aims to Reimagine Humanity by connecting and inspiring ideas for a better world. Our work disrupts global development and policy making by putting people at the center of decision making. We leverage innovation and technology to create spaces that create community and catalyze change - both on and offline.</p>
                        <p>The Humanity Lab realizes the untapped power and passion of people around the world to be partners in solving complex global issues including climate change, gender equality, fighting poverty, reducing inequality, and creating lasting peace. </p>
                    </div>
                    <div className="row">
                        <div className="service-item col-sm">
                            <ReactSVG src={ icEngage } className="homeVector" alt="Engage"/>
                            <div className="services-content">
                                <h4>Engage</h4>
                                <p>We create platforms that democratizes access to information and conversations that are shaping our world - including the United Nations General Assembly.</p>
                            </div>
                        </div>
                        <div className="service-item col-sm">
                            <ReactSVG src={ icLearn } className="homeVector" alt="Learn"/>
                            <div className="services-content">
                                <h4>Learn</h4>
                                <p>We help today's growing community of change-makers unlock their potential through trainings and workshops.</p>
                            </div>
                        </div>
                        <div className="service-item col-sm">
                            <ReactSVG src={ icInspire } className="homeVector" alt="Inspire" />
                            <div className="services-content">
                                <h4>Inspire</h4>
                                <p>We work with creative partners and artists to produce meaningful content and create authentic movements behind stories of real people.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* <section id="joinus" className="ms-subscribe parallax-slider">
                    <div className="row">
                        <div className="ms-title">
                            <h2>Join Us</h2>
                            <h3>For more information about our upcoming programs launching in 2019, the Global People's Summit or ways you can get more involved, please sign-up for updates. </h3>
                        </div>
                        <div className="subscribe-content col-md-12">
                            <div id="ajaxChimp" className="card-raised col-md-6">
                                <form action="//madsparrow.us15.list-manage.com/subscribe/post?u=8b691214cf59946fa6003f71b&amp;id=2d5e777049">
                                    <div className="form-group col-md-8">
                                        <span className="input-group-addon">
                                            <i className="material-icons">mail</i>
                                        </span>
                                        <input id="mc-email" type="email" name="EMAIL" placeholder="Your Email Address..." className="form-control" autoComplete="off" required />
                                        <span className="material-input"></span>
                                    </div>
                                    <div className="col-md-4 text-right">
                                        <div className="submit">
                                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary btn-raised btn-round" value="Let's do this" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="ms-about content" id="ms-about" style={{background: '#000'}}>
                    <div className="row">
                        <div className="col-12">
                            <ReactSVG src={ logoGps } className="homeVector" style={{textAlign: "center"}} alt="GPS"  />
                            <p style={{paddingTop:'25px',paddingBottom:'25px',color:'#FFF'}}>The Global People's Summit is our flagship annual event that gives all people a voice during the United Nations General Assembly.</p>
                            <iframe src="https://www.youtube.com/embed/pSx2OUgfEQc?rel=0&amp;amp;" style={{top:0,left:0,width:'100%',height:'500px'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
                            <a style={{display:'block',margin:'0 auto',width:'20%',marginTop:'25px'}} href="https://www.globalpeoplesummit.org/" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;