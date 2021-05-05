import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ContactCard } from "../component/contactCard";
import { Context } from "../store/appContext";

//create your first component

export function Home() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="row py-3">
				<div className="col-sm-10"></div>
				<div className="col-12 col-sm-2 text-end px-0">
					<Button variant="success">Add new contact</Button>
				</div>
			</div>
			{store.contacts.length < 1 ? (
				<div className="bg-primary text-success">Loading...</div>
			) : (
				store.contacts.map((info, index) => {
					return (
						<div key={`${index}`} className="row">
							<ContactCard
								name={`${info.full_name}`}
								email={`${info.email}`}
								dir={`${info.address}`}
								phone={`${info.phone}`}
							/>
						</div>
					);
				})
			)}
		</div>
	);
}
