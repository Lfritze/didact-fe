import React, { useEffect } from "react";
import Source from "./Source.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getSources } from "../../store/actions";
import { Link } from "react-router-dom";
import { DidactButton } from "../dashboard/ButtonStyles";

const Sources = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;
  const sources = state.sourcesReducer.sources;

  useEffect(() => {
    dispatch(getSources());
  }, [dispatch]);

  return (
    <div className="sources-list">
      {user.owner || user.admin ? (
        <DidactButton>
          <Link to="/resource-form">Add</Link>
        </DidactButton>
      ) : null}
      {sources.map(source => (
        <Source source={source} key={source.id} />
      ))}
    </div>
  );
};

export default Sources;
