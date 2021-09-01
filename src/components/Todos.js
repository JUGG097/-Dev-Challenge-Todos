import React, { useState } from "react";
import styles from "./Todos.module.css";

const Todos = () => {
	const [todos, setTodos] = useState([]);
	return (
		<>
			<div className={`mx-auto ${styles.my_container}`} style={{}}>
				<ul
					className={`nav ${styles.my_nav} nav-pills mb-3`}
					id="pills-tab"
					role="tablist"
				>
					<li class="nav-item" role="presentation">
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
						<p>All</p>
						<form>
							<div class="form-row align-items-center">
								<div class="col-9">
									<input
										type="text"
										class="form-control mb-2"
										placeholder="Add Task"
									/>
								</div>

								<div class="col-3">
									<button
										type="submit"
										class="btn btn-primary mb-2"
									>
										Add
									</button>
								</div>
							</div>
						</form>
					</div>
					<div
						className="tab-pane fade p-2"
						id="active"
						role="tabpanel"
						aria-labelledby="pills-profile-tab"
					>
						<p>Active</p>
						<form>
							<div class="form-row align-items-center">
								<div class="col-9">
									<input
										type="text"
										class="form-control mb-2"
										placeholder="Add Task"
									/>
								</div>

								<div class="col-3">
									<button
										type="submit"
										class="btn btn-primary mb-2"
									>
										Add
									</button>
								</div>
							</div>
						</form>
					</div>
					<div
						className="tab-pane fade p-2"
						id="completed"
						role="tabpanel"
						aria-labelledby="pills-contact-tab"
					>
						<p>Completed</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Todos;
