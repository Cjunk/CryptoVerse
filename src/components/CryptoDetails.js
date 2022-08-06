import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
// import useGetCryptoDetailsQuery from "../services/cryptoApi";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import Loading from "./loading";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7D");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  console.log(data);
  if (!data) return <Loading />;
  return <div>CryptoDetails {coinId}</div>;
};

export default CryptoDetails;
