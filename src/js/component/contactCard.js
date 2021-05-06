import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import StandarImg from "../../img/mikeAnamendolla.png";

export const ContactCard = data => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row border px-0 ps-3">
			<div className="col-12 col-md-3 col-sm-2 text-center">
				<img
					className="py-2 "
					src={StandarImg}
					alt="Mike Anamendolla"
				/>
			</div>
			<div className="col-12 col-md-6 col-sm-4">
				<p className="fs-5 my-2">{data.name}</p>
				<p className="fs-6 text-secondary my-1">
					<i className="fas fa-map-marker-alt pe-3"></i>
					{data.dir}
				</p>
				<p className="fs-6 text-secondary my-1">
					<i className="fas fa-phone pe-3"></i>
					{data.phone}
				</p>
				<p className="fs-6 text-secondary my-1">
					<i className="fas fa-envelope pe-3"></i>
					{data.email}
				</p>
			</div>
			<div className="col-md-1 col-sm-4"></div>
			<div className="col-12 col-md-2 col-sm-2 text-center">
				<button className="btn">
					<i className="fas fa-pencil-alt"></i>
				</button>
				<button
					className="btn"
					onClick={() => actions.delContact(data.id)}>
					<i className="fas fa-trash-alt"></i>
				</button>
			</div>
		</div>
	);
};
export default ContactCard;
