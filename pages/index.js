import Head from 'next/head';
import React from 'react';
import { Row, Col } from "antd";
import axios from 'axios';
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import List from "../components/List";
import SERVICE_PATH from '../config/API_URL';

const Home = (props) => {

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            data={props}
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

Home.getInitialProps = async () => {
  const promise = new Promise((resolve, reject) => {
    axios(SERVICE_PATH.GET_ARTICLE_LIST)
      .then(res => resolve(res.data))
  })

  return await promise;
}

export default Home;
