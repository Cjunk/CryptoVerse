import React from "react";
import { Select, Typography, Row, Col, Card } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
const { Title } = Typography;
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
const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery("");
  // console.log(cryptoNews);
  if (!cryptoNews) return "Loading.....";

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.map((news, i) => {
        {
          console.log(news);
        }
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
              </div>
              <p>{news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
            </a>
          </Card>
        </Col>;
      })}
    </Row>
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
