import React, { useState } from "react";

const Loading = () => {
  const loadingStr = "Loading";
  const [loadingText, setLoadingText] = useState(1);
  return (
    <div>
      <p>{loadingStr + ".".repeat(loadingText)}</p>
    </div>
  );
};

export default Loading;
