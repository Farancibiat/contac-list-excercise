import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ContactCard } from "../component/contactCard";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";

//create your first component

export function Home() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{/* Line to redirect to modify contact page */}
			{store.redirect ? <Redirect to="/modifycontact" /> : ""}
			{/* Here goes the pseudo-navbar with button  */}
			<div className="row py-3">
				<div className="col-sm-10"></div>
				<div className="col-12 col-sm-2 text-end px-0">
					<Link to="/newcontact">
						<Button variant="success">Add new contact</Button>
					</Link>
				</div>
			</div>

			{/* This is the contacts renderization with an alternative text for the zero contact situation */}
			<div className="mb-6">
				{store.contacts.length === 0 ? (
					<div className="text-center text-danger display-5">
						Your Agenda its Empty, add a new contact to visualize
						contacts...
					</div>
				) : (
					store.contacts.map((info, index) => {
						return (
							<>
								<ContactCard
									full_name={`${info.full_name}`}
									email={`${info.email}`}
									address={`${info.address}`}
									phone={`${info.phone}`}
									id={`${info.id}`}
									key={`${info.id}`}
								/>
							</>
						);
					})
				)}
			</div>
		</div>
	);
}
