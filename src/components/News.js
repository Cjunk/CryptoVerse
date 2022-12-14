import React, { useState } from "react";
import { Select, Typography, Row, Col, Card, Avatar } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import moment from "moment";
import { useGetCryptosQuery } from "../services/cryptoApi";
const { Text, Title } = Typography;
const { Option } = Select;
// const options = {
//   method: "GET",
//   url: "https://crypto-news16.p.rapidapi.com/news/top/10",
//   headers: {
//     "X-RapidAPI-Key": "56a7a13132msh194e4328f2a2d69p198724jsn44df556376bb",
//     "X-RapidAPI-Host": "https://crypto-news16.p.rapidapi.com/news/top/10",
//   },
// };
// const axios = require("axios");
const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery("");
  const [newsOption, setNewsCategory] = useState("ALL");
  const demoImage = "";
  const { data } = useGetCryptosQuery(100);
  const mySort = (a, b) => { // FIXME: Not sorting as I would like. 
    
    return a -b
  }
  // console.log(cryptoNews); TODO:delete me
  if (!cryptoNews) return "Loading.....";

  return (
    <div>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterSort={mySort} // doesnt work yet FIXME:
              filterOption={(input, option) => {
                //https://ant.design/components/select/
                console.log(option);
                option.children.toLowerCase().indexOf(input.toLowerCase());
              }}
            >
              <Option value="CryptoCurrency"></Option>
              {data?.data?.coins.map((coin, i) => (
                <Option key={i} value={coin.name}></Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.title}
                  </Title>
                  <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                </div>
                <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                <div className="provider-container">
                  <div>
                    <Avatar src={news.title?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    <Text className="provider-name">{news.title?.ntitleame}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  // true if on Home Page
  // async function getTheNews() {
  // const response = await axios
  //   .request(options)
  //   .then((response) => {
  //     // console.log("RESPONSE.data", response.data);
  //     // console.log("got data", response.data);
  //     return response
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // return <Row gutter={[24, 24]}>dfgdfg</Row>;

  // }
};

export default News;
