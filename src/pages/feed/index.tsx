import React, { useContext, useEffect } from "react";
import { iWebContext, WebContext } from "../../context/webcontext";

function Feed() {
  const { user } = useContext<iWebContext>(WebContext);

  useEffect(() => {}, []);

  return <div></div>;
}

export default Feed;
