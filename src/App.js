import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import landingActions from "./module/action";

function App() {
  const dispatch = useDispatch();

  const landing = useSelector((state) => state.landing.homeContent);

  const isEmpty = (obj) => {
    return Array.isArray(obj)
      ? obj.length === 0
      : Object.keys(obj).length === 0;
  };

  useEffect(() => {
    if (isEmpty(landing))
      dispatch(landingActions.getDynamicContentRequest({ page: "home" }));
  }, [dispatch, landing]);

  useEffect(() => {
    console.table(landing);
  }, [landing]);

  return (
    <div>
      <h2>Post Title</h2>
      {landing.map((item, i) => (
        <div key={i}>{item.title}</div>
      ))}
    </div>
  );
}

export default App;
