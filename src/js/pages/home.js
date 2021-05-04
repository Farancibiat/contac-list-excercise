import React from "react";
import { Button } from "react-bootstrap";
//create your first component
export function Home() {
	return (
		<>
			<div className="container py-2">
				<div className="row">
					<div className="col-sm-10"></div>
					<div className="col-12 col-sm-2">
						<Button variant="success">Add new contact</Button>
					</div>
				</div>
			</div>
		</>
	);
}
