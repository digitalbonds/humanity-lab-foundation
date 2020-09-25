import React from 'react';
import { Layout, Button, Row, Col, Typography } from 'antd';
import { InstagramOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;

const { Header, Footer } = Layout;

const CustomFooter = (props) => {

    return (
        <>
            <Row justify="center" style={{paddingTop: '25px', paddingBottom: '25px'}}>
                <Col className="gutter-row" span={2}>
                    <Button type="primary" shape="circle" icon={<InstagramOutlined />} size={"large"} href="http://www.instagram.com/thehumanitylab/" />
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button type="primary" shape="circle" icon={<FacebookOutlined />} size={"large"} href="http://www.facebook.com/humanitylab/" />
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button type="primary" shape="circle" icon={<LinkedinOutlined />} size={"large"} href="www.linkedin.com/company/humanity-lab/" />
                </Col>
            </Row>
            <Row justify="center" justify="center">
                <Col className="gutter-row" span={12}>
                    <Paragraph>Washington DC, USA</Paragraph>
                    <Paragraph>info@humanitylabfoundation.org</Paragraph>                    
                    <Paragraph>Copyright © 2020 Humanity Lab Foundation All Rights Reserved. Website by: Digital Bonds.</Paragraph>
                </Col>
            </Row>
        </>
    );
};

export default CustomFooter;