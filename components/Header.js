import React, { useState, useEffect } from 'react';
import '../styles/components/header.css';
import { Row, Col, Menu } from 'antd';
import { HomeOutlined, YoutubeOutlined, SmileOutlined, MessageOutlined } from '@ant-design/icons';
import axios from 'axios';

import Router from 'next/router';
import Link from 'next/link';
import SERVICE_PATH from '../config/API_URL';

const Header = () => {

    const [navArray, setNavArray] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(SERVICE_PATH.GET_TYPE_INFO)
                .then(res => {
                    return res.data;
                })
            setNavArray(result);
        }

        fetchData();
    }, []);

    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/');
        } else {
            Router.push(`/list?id=${e.key}`)
        }
    }

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <Link href='/'>
                        <a>
                            <span className="header-logo">Charlie Rao</span>
                        </a>
                    </Link>
                    <span className="header-txt">This is Charlie's first blog</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0">
                            <HomeOutlined />
                            Home
                        </Menu.Item>

                        <Menu.Item key="1">
                            <YoutubeOutlined />
                            Video
                        </Menu.Item>

                        <Menu.Item key="2">
                            <MessageOutlined />
                            Charlie's Idea
                        </Menu.Item>

                        <Menu.Item key="3">
                            <SmileOutlined />
                            Life
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    );
}

export default Header;