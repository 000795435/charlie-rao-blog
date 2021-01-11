import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Row, Col } from "antd";
import axios from 'axios';
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import List from "../components/List";
import SERVICE_PATH from '../config/API_URL';

const ListPage = (props) => {

    const [myList, setMyList] = useState(props ? props : []);
    const [listType, setListType] = useState('List');

    useEffect(() => {
        setMyList(props);
        setListType(props ? (props.data[0]).type_name : 'List');
    });

    return (
        <div>
            <Head>
                <title>{listType}</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <List
                        data={myList}
                    />
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

ListPage.getInitialProps = async (context) => {
    let id = context.query.id;
    const promise = new Promise((resolve, reject) => {
        axios(SERVICE_PATH.GET_ARTICLE_LIST_BY_ID + id)
            .then(res => resolve(res.data))
    })

    return await promise;
}

export default ListPage;