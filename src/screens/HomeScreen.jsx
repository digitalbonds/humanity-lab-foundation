import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Layout, Row, Col, Typography, Carousel, Space, Timeline, Divider , Card, Avatar} from 'antd'
import { ReactSVG } from 'react-svg'
import logo from '../assets/vectors/logo.svg';
import icEngage from '../assets/vectors/ic_engage.svg';
import icInspire from '../assets/vectors/ic_inspire.svg';
import icAmplify from '../assets/vectors/ic_amplify.svg';
import icLearn from '../assets/vectors/ic_learn.svg';
import logoGps from '../assets/vectors/gps_logo.svg';
import media1 from '../assets/images/media_1.jpg';
import media2 from '../assets/images/media_2.jpg';
import media3 from '../assets/images/media_3.jpg';
import media4 from '../assets/images/media_4.jpg';
import media5 from '../assets/images/media_5.jpg';
const { Title, Paragraph } = Typography;
const { Content } = Layout;
const { Meta } = Card;

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
                <Row gutter={16} justify="center" style={{paddingBottom: '50px'}}>
                    <Col className="gutter-row" span={7}>
                        <div className="services-content">
                            <Title level={2}>Some of our programs</Title>
                        </div>
                    </Col>
                </Row>
                <Carousel className='banner' autoplay>
                    <div className='banner-image banner-image-program-1'> 
                        <div className='banner-text'>
                             <h1 className='banner-text-line-2'>Finding Humanity Podcast</h1>
                             <Button type="primary" href="http://findinghumanitypodcast.com/">See more</Button>
                        </div>
                    </div>
                    <div className='banner-image banner-image-program-2'> 
                        <div className='banner-text'>
                             <h1 className='banner-text-line-2'>Be The One</h1>
                             <Button type="primary" href="https://betheone.care/">See more</Button>
                        </div>
                    </div>
                    <div className='banner-image banner-image-program-3'> 
                        <div className='banner-text'>
                             <h1 className='banner-text-line-2'>Humanity Lab Master Class</h1>
                             <Button type="primary" href="https://www.humanitylab.education/">See more</Button>
                        </div>
                    </div>
                    <div className='banner-image banner-image-program-4'> 
                        <div className='banner-text'>                            
                             <h1 className='banner-text-line-2'>Global People Summit</h1>
                             <Button type="primary" href="https://www.globalpeoplesummit.org/">See more</Button>
                        </div>
                    </div>
                </Carousel>
                <Row gutter={16} justify="center" style={{padding: '50px'}}>
                    <Col className="gutter-row" span={7}>
                        <div className="services-content">
                            <Title level={2}>Some of our work</Title>
                        </div>
                    </Col>
                </Row>
                <Carousel className='banner-black' autoplay>
                    <div className='banner-image'> 
                        <div className='banner-text'>
                            <Title level={2} style={{color: "#FFF", width: "100%"}}>Global People's Summit 2018</Title>
                            <iframe src="https://www.youtube.com/embed/pSx2OUgfEQc?rel=0&amp;amp;" style={{top:0,left:0,width:'100%',height:'500px'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
                        </div>
                    </div>
                    <div className='banner-image'> 
                        <div className='banner-text'>
                            <Title level={2} style={{color: "#FFF", width: "100%"}}>Be The One</Title>
                            <iframe src="https://www.youtube.com/embed/sAGvJR7eQ28?rel=0&amp;amp;" style={{top:0,left:0,width:'100%',height:'500px'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
                        </div>
                    </div>
                    <div className='banner-image'> 
                        <div className='banner-text'>
                            <Title level={2} style={{color: "#FFF", width: "100%"}}>Finding Humanity Podcast</Title>
                            <iframe src="http://www.findinghumanitypodcast.com/videos/teaser.mp4" style={{top:0,left:0,width:'100%',height:'500px'}} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen=""></iframe>
                        </div>
                    </div>
                </Carousel>
                {/* <Row gutter={16} justify="center" style={{padding: '50px'}}>
                    <Col className="gutter-row" span={7}>
                        <div className="services-content">
                            <Title level={2}>Humanity Lab in the Media</Title>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16} justify="center">
                    <Col span={4}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                            <img
                                alt="Global people Summit"
                                src={media3}
                            />
                            }
                        >
                            <Meta
                            title="GPS article"
                            description="This is the description"
                            />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                            <img
                                alt="Global people Summit"
                                src={media5}
                            />
                            }
                        >
                            <Meta
                            title="Card title"
                            description="This is the description"
                            />
                        </Card>
                    </Col>
                </Row> */}
            </Content>
        </Layout>
    );
};



export default HomeScreen;