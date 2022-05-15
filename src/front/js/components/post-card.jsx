import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./button";

export const PostCard = (props) => {
  const linkToPostID = "/blog/".concat(props.postID);
  const linkToUserID = "/user/".concat(props.userID);

  return (
    <div
      className={`my-card post-card-size row ${
        props.variant == "blog" ? "p-0" : ""
      }`}
    >
      <div className="media-box col-sm-12 col-md-5">
        {props.media ? (
          <img className="media-picture" src={props.media} />
        ) : (
          <div className="d-flex h-100">
            <i className="fas fa-umbrella-beach secondary-color m-auto icon-no-photo" />
          </div>
        )}
      </div>
      <div className="content-post-box col-sm-12 col-md-7">
        <div className="my-card-header py-1 px-3">
          <Link to={linkToUserID}>
            <div className="d-flex align-items-center">
              <img src={props.userpicture} className="user-picture" />
              <p className="user-name">{props.username}</p>
            </div>
          </Link>
        </div>
        <div className="my-card-body">
          <h2>{props.title}</h2>
          <p className="text-post">{props.text}</p>
          <div className="mt-auto mb-3 text-center">
            <Link to={linkToPostID}>
              <Button
                className=""
                size="sm"
                color="secondary"
                text="Leer más"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  postID: PropTypes.number,
  media: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  userID: PropTypes.number,
  userpicture: PropTypes.string,
  username: PropTypes.string,
};
