import React, { useState, useContext, useEffect, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";
import { PostCard } from "../component/post-card";
import "../../styles/blog.scss";
// import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import CloseIcon from "@material-ui/icons/Close";
// import Button1 from "@material-ui/core/Button";

export const Blog = () => {
	const { store, actions } = useContext(Context);
	const [posts, setPosts] = useState([]);
	const [postsMap, setPostsMap] = useState("");
	// const [open, setOpen] = React.useState(false);
	// const handleClickOpen = () => {
	// 	setOpen(true);
	// };
	// const handleClose = () => {
	// 	setOpen(false);
	// };
	useEffect(() => {
		actions.getPosts();
	}, []);

	useEffect(() => {
		if (store.posts != undefined) {
			setPostsMap(
				store.posts.map((post, index) => {
					return (
						<PostCard
							key={index.toString()}
<<<<<<< HEAD
							idPost={post.id}
=======
							postId={post.id}
>>>>>>> 0a5da133af2245ce3c257af723f1a30af875b4a0
							media={post.media}
							title={post.title}
							text={post.text}
							username="Sergio Carrascal"
							userpicture="https://bartist.net/wp-content/uploads/2021/03/smoreira.jpg"
						/>
					);
				})
			);
		}
		console.log(store.posts);
	}, [store.posts]);

	return (
		<>
			<MyNavbar />
			<div className="container-fluid row main-box blog-view">
				<div className="col-12 content-box">
					<div className="container-add-post">
						<h1 className="text-center mt-4 mx-4 blog">Blog</h1>
						<div>
							<Button
								className="col-4 mt-4 mx-4 add-post"
								size="lm"
								color="secondary"
								text="add post"
								data-toggle="modal"
							/>
						</div>
					</div>
					{postsMap}
				</div>
			</div>

			<Footer />
		</>
	);
};

/*
<div>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="form-dialog-title"
					fullWidth={true}
					maxWidth="sm">
					<div className="dialog-title-btn">
						<h3 id="form-dialog-title">Crear nuevo post</h3>
						<div onClick={handleClose} color="primary">
							<CloseIcon className="close-icon" />
						</div>
					</div>
					<DialogContent className="titles-container">
						<h3 id="form-dialog-txt">Titulo del post:</h3>
						<TextField autoFocus margin="dense" id="name" label="Titulo" type="text" fullWidth />
						<h3 id="form-dialog-txt">Escribe tus experiencias:</h3>
						<TextField margin="dense" id="name" label="Experiencias" type="text" fullWidth />
						<h3 id="form-dialog-txt">Añade una imagen:</h3>
						<div className="center-file-input">
							<input type="file" />
						</div>
						<button className="post-button" color="primary">
							Post
						</button>
					</DialogContent>
				</Dialog>
			</div>
*/
