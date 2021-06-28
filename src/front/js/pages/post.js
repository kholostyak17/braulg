import React, { useContext, useEffect, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import Button from "../component/button.js";
import Modal from "react-bootstrap/Modal";

import "../../styles/post.scss";
export const Post = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const linkToUserID = "/user/".concat(store.post_by_id.traveler_id);
	//variables para desplegar modal de borrar post
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const modalDeletePost = () => {
		if (store.post_by_id.traveler_id == localStorage.getItem("tokenID")) {
			return (
				<div className="d-flex m-5 justify-content-end text-danger">
					<span onClick={handleShow}>
						Eliminar post <i className="fas fa-trash-alt"></i>
					</span>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header className="text-center">
							<Modal.Title className="text-center">Eliminar post</Modal.Title>
						</Modal.Header>
						<Modal.Body className="text-center">
							<p>¿Seguro que deseas eliminar este post?</p>
							<Button
								className="m-2"
								size="sm"
								color="secondary"
								text="Cancelar"
								callBackFunc={handleClose}
							/>
							<Button
								className="m-2"
								size="sm"
								color="primary"
								text="Eliminar"
								callBackFunc={() => {
									actions.getDeletePost(params.id);
								}}
							/>
						</Modal.Body>
					</Modal>
				</div>
			);
		}
	};

	useEffect(() => {
		actions.getPost(params.id);
	}, []);

	return (
		<>
			<MyNavbar />
			<div className="blog-view">
				<div className="col-sm-12 col-md-9 content-box scrollable-box p-3">
					<div>
						<img src={store.post_by_id.media} className="post-image" />
					</div>
					<div className="d-flex justify-content-between py-2 px-3">
						<h1 className="text-center">{store.post_by_id.title}</h1>
						<Link to={linkToUserID}>
							<div className="d-flex align-items-center justify-content-center">
								<img
									src={
										localStorage.getItem("token")
											? store.post_by_id.traveler_picture
											: store.profilePicture
									}
									className="user-picture-post"></img>
								<p className="user-name ms-2">
									{localStorage.getItem("token") ? store.post_by_id.traveler_name : "Usuario"}
								</p>
							</div>
						</Link>
					</div>
					<p className="px-3">{store.post_by_id.text}</p>
					{modalDeletePost()}
				</div>
			</div>
			<Footer />
		</>
	);
};
