import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Layout, Row, Col, Typography, Carousel, Space, Timeline, Divider } from 'antd'
import { ReactSVG } from 'react-svg'
import logo from '../assets/vectors/logo.svg';
import icEngage from '../assets/vectors/ic_engage.svg';
import icInspire from '../assets/vectors/ic_inspire.svg';
import icAmplify from '../assets/vectors/ic_amplify.svg';
import icLearn from '../assets/vectors/ic_learn.svg';
import logoGps from '../assets/vectors/gps_logo.svg';
const { Title, Paragraph, Text } = Typography;
const { Content, Footer } = Layout;

const HomeScreen = (props) => {

    return (
        <Layout>
            <Content>
                <Carousel className='banner'>
                    <div className='banner-image banner-image-1'> 
                        <div className='banner-text'>
                            <ReactSVG src={ logo } className="bannerVector" alt="Humanity Lab Foundation" />
                             <h3 className='banner-text-line-1'>The Humanity Lab is a disruptive empathy-driven movement at the intersection of public policy and people power.  We translate between outrage and institutional breakthrough.</h3>
                        </div>
                    </div>                    
                </Carousel>
                <Row justify="center" style={{paddingBottom: '50px'}}>
                    <Col className="gutter-row" span={20}>
                        <Paragraph>The Humanity Lab is a collective of enablers that facilitates public engagement and social innovation that challenges the traditional, top-down structures and decision-making process. We are a systems-based organization that realizes that the world is interconnected and interdependent and that global communities often don't have access to influence the systems that shape their lives.</Paragraph>
                        <Paragraph>The Humanity Lab unlocks human potential to break down barriers, inspire collective action, and democratize the power that shapes the world.</Paragraph>
                        <Paragraph>We realize the untapped power and passion of people as partners in change. We convene, connect and collaborate with everyday people in solving complex global issues and driving social change.</Paragraph>
                    </Col>
                </Row>
                <Row gutter={16} justify="center" style={{paddingBottom: '50px'}}>
                    <Col className="gutter-row" span={5}>
                        <ReactSVG src={ icEngage } className="homeVector" alt="Engage"/>
                        <div className="services-content">
                            <Title level={2}>Catalize Movement</Title>
                            <Paragraph>We create creative content that inspire thought-leadership, raise awareness and spark movement for impact.</Paragraph>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <ReactSVG src={ icLearn } className="homeVector" alt="Learn"/>
                        <div className="services-content">
                            <Title level={2}>Unlock Potential</Title>
                            <Paragraph>Giving people and organizations tools and resources to “unlock their potential”.</Paragraph>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <ReactSVG src={ icAmplify } className="homeVector" alt="Inspire" />
                        <div className="services-content">
                            <Title level={2}>Amplify Impact</Title>
                            <Paragraph>Connect ideas, people, resources to amplify sustainable change.</Paragraph>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <ReactSVG src={ icInspire } className="homeVector" alt="Inspire" />
                        <div className="services-content">
                            <Title level={2}>Democratize Power</Title>
                            <Paragraph>Putting people at the center of decision making.</Paragraph>
                        </div>
                    </Col>
                </Row>
                <Row justify="center" style={{background: '#000'}}>
                    <Col className="gutter-row" span={20} style={{paddingTop: "50px", paddingBottom: "50px"}}>
                        <ReactSVG src={ logoGps } className="homeVector" style={{textAlign: "center"}} alt="GPS"  />
                        <Paragraph style={{color: "#FFF"}}>The Global People's Summit is our flagship annual event that gives all people a voice during the United Nations General Assembly.</Paragraph>
                        <iframe src="https://www.youtube.com/embed/pSx2OUgfEQc?rel=0&amp;amp;" style={{top:0,left:0,width:'100%',height:'500px'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
                        <Button type="primary" style={{marginTop: "25px"}} href="https://www.globalpeoplesummit.org/">Learn more</Button>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default HomeScreen;