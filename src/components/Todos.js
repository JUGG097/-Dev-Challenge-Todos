import React, { useState, useEffect } from "react";
import styles from "./Todos.module.css";

const TodoList = ({ todo, toggleTask }) => {
	return (
		<>
			<div
				className="row mt-2"
				style={{
					fontWeight: 500,
					fontSize: "18px",
					cursor: "pointer",
				}}
			>
				<div className="col-12">
					{todo.completed ? (
						<i
							className="fas fa-check-square"
							style={{
								color: "#2F80ED",
							}}
							onClick={() => {
								toggleTask(todo.id);
							}}
						></i>
					) : (
						<i
							className="far fa-square"
							onClick={() => {
								toggleTask(todo.id);
							}}
						></i>
					)}
					<span
						className={`ml-2 ${
							todo.completed ? styles.my_completedTodo : ""
						}`}
						style={{
							cursor: "default",
						}}
					>
						{todo.taskname}
					</span>
				</div>
			</div>
		</>
	);
};

const CompleteTodoList = ({ todo, toggleTask, deleteTask }) => {
	return (
		<>
			<div
				className="row mt-2"
				style={{
					fontWeight: 500,
					fontSize: "18px",
					cursor: "pointer",
				}}
			>
				<div className="col-8">
					{todo.completed ? (
						<i
							className="fas fa-check-square"
							style={{
								color: "#2F80ED",
							}}
							onClick={() => {
								toggleTask(todo.id);
							}}
						></i>
					) : (
						<i
							className="far fa-square"
							onClick={() => {
								toggleTask(todo.id);
							}}
						></i>
					)}
					<span
						className={`ml-2 ${
							todo.completed ? styles.my_completedTodo : ""
						}`}
						style={{
							cursor: "default",
						}}
					>
						{todo.taskname}
					</span>
				</div>
				<div className="col-4 text-right">
					<i
						className="far fa-trash-alt"
						style={{
							color: "#BDBDBD",
						}}
						onClick={() => {
							deleteTask(todo.id);
						}}
					></i>
				</div>
			</div>
		</>
	);
};

const Todos = () => {
	const todoStorage = JSON.parse(localStorage.getItem("todos"));
	const [todos, setTodos] = useState([]);
	const [formdata, setFormData] = useState("");
	const activeTodos = todos.filter((todo) => todo.completed === false);
	const completedTodos = todos.filter((todo) => todo.completed === true);

	const toggleTask = (id) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		setTodos(newTodos);
		localStorage.setItem("todos", JSON.stringify(newTodos));
	};

	const deleteTask = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
		localStorage.setItem("todos", JSON.stringify(newTodos));
	};

	const deleteAll = () => {
		const newTodos = todos.filter((todo) => todo.completed === false);
		setTodos(newTodos);
		// localStorage.setItem("todos", todos);
		localStorage.setItem("todos", JSON.stringify(newTodos));
	};

	const handleChange = (e) => {
		setFormData(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{
				id: todos.length + 1,
				taskname: formdata,
				completed: false,
			},
		]);
		localStorage.setItem(
			"todos",
			JSON.stringify([
				...todoStorage,
				{
					id: todoStorage.length + 1,
					taskname: formdata,
					completed: false,
				},
			])
		);

		setFormData("");
	};

	useEffect(() => {
		const todoStorage = JSON.parse(localStorage.getItem("todos"));
		if (todoStorage === null) {
			setTodos([]);
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			setTodos(todoStorage);
		}
	}, []);
	return (
		<>
			<div className={`mx-auto ${styles.my_container}`} style={{}}>
				<ul
					className={`nav ${styles.my_nav} nav-pills mb-3`}
					id="pills-tab"
					role="tablist"
				>
					<li className="nav-item" role="presentation">
						<a
							// className="nav-link active"
							className={`nav-link ${styles.my_navlink} active`}
							id="pills-home-tab"
							data-toggle="pill"
							href="#all"
							role="tab"
							aria-controls="pills-home"
							aria-selected="true"
						>
							All
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							// className="nav-link"
							className={`nav-link ${styles.my_navlink}`}
							id="pills-profile-tab"
							data-toggle="pill"
							href="#active"
							role="tab"
							aria-controls="pills-profile"
							aria-selected="false"
						>
							Active
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							// className="nav-link"
							className={`nav-link ${styles.my_navlink}`}
							id="pills-contact-tab"
							data-toggle="pill"
							href="#completed"
							role="tab"
							aria-controls="pills-contact"
							aria-selected="false"
						>
							Completed
						</a>
					</li>
				</ul>
				<div className="tab-content" id="pills-tabContent">
					<div
						className="tab-pane fade show active p-2"
						id="all"
						role="tabpanel"
						aria-labelledby="pills-home-tab"
					>
						<form onSubmit={handleSubmit}>
							<div className="form-row align-items-center">
								<div className="col-9">
									<input
										type="text"
										name="taskname"
										className={`form-control mb-2 ${styles.my_input}`}
										required
										placeholder="Add Task"
										value={formdata}
										onChange={handleChange}
									/>
								</div>

								<div className="col-3">
									<button
										type="submit"
										className={`btn mb-2 btn-primary ${styles.my_btn}`}
										onClick={handleSubmit}
									>
										Add
									</button>
								</div>
							</div>
						</form>
						{todos.map((todo) => (
							<TodoList
								todo={todo}
								key={todo.id}
								toggleTask={toggleTask}
							/>
						))}
					</div>
					<div
						className="tab-pane fade p-2"
						id="active"
						role="tabpanel"
						aria-labelledby="pills-profile-tab"
					>
						<form onSubmit={handleSubmit}>
							<div className="form-row align-items-center">
								<div className="col-9">
									<input
										type="text"
										name="taskname"
										className={`form-control mb-2 ${styles.my_input}`}
										required
										placeholder="Add Task"
										value={formdata}
										onChange={handleChange}
									/>
								</div>

								<div className="col-3">
									<button
										type="submit"
										className={`btn mb-2 btn-primary ${styles.my_btn}`}
										onClick={handleSubmit}
									>
										Add
									</button>
								</div>
							</div>
						</form>
						{activeTodos.map((todo) => (
							<TodoList
								todo={todo}
								key={todo.id}
								toggleTask={toggleTask}
							/>
						))}
					</div>
					<div
						className="tab-pane fade p-2"
						id="completed"
						role="tabpanel"
						aria-labelledby="pills-contact-tab"
					>
						{completedTodos.map((todo) => (
							<CompleteTodoList
								todo={todo}
								key={todo.id}
								toggleTask={toggleTask}
								deleteTask={deleteTask}
							/>
						))}
						{completedTodos.length > 0 && (
							<div className="row mt-2">
								<div className="col-12 text-right">
									<button
										type="submit"
										className={`btn mb-2 btn-danger ${styles.my_delete_btn}`}
										onClick={deleteAll}
									>
										<i
											className="far fa-trash-alt"
											style={{
												color: "#BDBDBD",
											}}
										></i>{" "}
										delete all
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Todos;
