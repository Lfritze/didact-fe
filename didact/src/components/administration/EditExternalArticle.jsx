import React, { useState, useEffect } from "react";

import {
  DidactField,
  DidactInput,
  DidactLabel,
  DidactTextArea
} from "../dashboard/FormStyles";

import {
  getExternalArticleById,
  editExternalArticle,
  deleteExternalArticle
} from "../../store/actions";

import { DidactButton } from "../dashboard/ButtonStyles";

import Card from "@material-ui/core/Card";
import { useDispatch, useSelector } from "react-redux";

const EditExternalArticle = ({ props, id }) => {
  const dispatch = useDispatch();
  const article = useSelector(state => state.articlesReducer.externalArticle);
  const [changes, setChanges] = useState({
    title: "",
    description: "",
    topic: "",
    link: ""
  });

  useEffect(() => {
    dispatch(getExternalArticleById(id));
  }, []);

  useEffect(() => {
    setChanges({
      title: article.title,
      description: article.description,
      topic: article.topic,
      link: article.link
    });
  }, [article]);

  const handleChange = e => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  };

  const handleDelete = e => {
    dispatch(deleteExternalArticle(id));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editExternalArticle(id, changes));
    props.history.push("/articles");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <DidactField>
          <DidactLabel>Article Title</DidactLabel>
          <DidactInput
            value={changes.title || ""}
            onChange={handleChange}
            name="title"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Description</DidactLabel>
          <DidactTextArea
            value={changes.description || ""}
            onChange={handleChange}
            name="description"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Topic</DidactLabel>
          <DidactInput
            value={changes.topic || ""}
            onChange={handleChange}
            name="topic"
          />
        </DidactField>
        <DidactField>
          <DidactLabel>Article Link</DidactLabel>
          <DidactInput
            value={changes.link || ""}
            onChange={handleChange}
            name="link"
          />
        </DidactField>
        <DidactButton type="submit">Submit</DidactButton>
      </form>
    </Card>
  );
};

export default EditExternalArticle;
