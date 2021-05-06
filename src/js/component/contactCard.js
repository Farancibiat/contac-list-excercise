import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import StandarImg from "../../img/mikeAnamendolla.png";

export const ContactCard = data => {
	const { store, actions } = useContext(Context);

	return (
		<div className="border px-0 ps-3">
			<div className="row">
				<div className="col-2 text-center">
					<img
						className="py-2 "
						src={StandarImg}
						alt="Mike Anamendolla"
					/>
				</div>
				<div className="col-4">
					<p className="fs-3">{data.name}</p>
					<p className="fs-6">{data.email}</p>
					<p className="fs-6">{`${data.address}`}</p>
					<p className="fs-6">{data.phone}</p>
				</div>
				<div className="col-4"></div>
				<div className="col-2">
					<div className="bg-warning">Here goes the icons</div>
				</div>
			</div>
		</div>
	);
};
export default ContactCard;
