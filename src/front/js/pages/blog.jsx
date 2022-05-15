import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import Button from "../components/button";
import { PostCard } from "../components/post-card";
// componentes para el modal
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@material-ui/icons/Close";

export const Blog = () => {
  const { store, actions } = useContext(Context);
  const [posts, setPosts] = useState([]);
  const [postsMap, setPostsMap] = useState("");
  // variables para modal form new post
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // variables para el hook form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    actions.createPost(JSON.stringify(data), data.media);
  };

  useEffect(() => {
    actions.getPosts();
  }, []);

  useEffect(() => {
    if (store.posts != undefined) {
      setPostsMap(
        store.posts.map((post, index) => {
          if (post.is_active == true) {
            return (
              <PostCard
                key={index.toString()}
                postID={post.id}
                media={post.media}
                title={post.title}
                text={post.text}
                userID={post.traveler_id}
                username={
                  localStorage.getItem("token") ? post.traveler_name : "Usuario"
                }
                userpicture={
                  localStorage.getItem("token")
                    ? post.traveler_picture
                    : store.profilePicture
                }
                variant="blog"
              />
            );
          }
        })
      );
    }
  }, [store.posts]);

  return (
    <div className="container-fluid row main-box blog-view">
      <div className="content-box-blog">
        <div className="container d-flex justify-content-between flex-wrap">
          <h1 className="text-center mt-4 mx-4 secondary-color">Blog</h1>
          {localStorage.getItem("token") != undefined ? (
            <Button
              className="mx-5 my-4"
              size="lm"
              color="secondary"
              text="AÑADIR NUEVO POST"
              data-toggle="modal"
              callBackFunc={handleShow}
            />
          ) : (
            ""
          )}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="d-flex px-4">
              <Modal.Title className="">Crear un nuevo post</Modal.Title>
              <div onClick={handleClose} className="ms-auto" color="primary">
                <CloseIcon className="close-icon" />
              </div>
            </Modal.Header>
            <Modal.Body className="text-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Titulo de tu entrada de blog:</h3>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="input-style"
                  maxLength="65"
                  title="Máximo 65 caracteres"
                  {...register("title")}
                />
                <h3>Escribe tus experiencias:</h3>
                <textarea
                  id="text"
                  name="text"
                  className="input-style my-textarea"
                  placeholder="Cuentanos que fue lo más emocionante..."
                  maxlenght="25000"
                  title="Máximo 25000 caracteres"
                  required
                  {...register("text")}
                />
                <h3>Añade una imagen de tu historia:</h3>
                <div className="center-file-input">
                  <input
                    id="media"
                    type="file"
                    className="input-style"
                    {...register("media")}
                  />
                </div>
                <div className="text-center">
                  <input
                    type="submit"
                    value="AÑADIR POST"
                    className="button lm secondary mx-auto my-4"
                    onClick={handleClose}
                  />
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
        <div className="container d-flex flex-column-reverse">
          {postsMap != "" ? (
            postsMap
          ) : (
            <div className="d-flex justify-content-center ">
              <div className="spinner-border text-warning my-5" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
