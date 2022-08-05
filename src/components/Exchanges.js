import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
const Exchanges = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  console.log(cryptos);
  return
  <div>

  </div>
  
};

export default Exchanges;
