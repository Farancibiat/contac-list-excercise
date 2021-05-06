import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useFormik } from "formik";
import { Link, Redirect } from "react-router-dom";
import * as Yup from "yup";

export function AddContact() {
	const { store, actions } = useContext(Context);
	const [redirect, setRedirect] = useState(false);
	const phoneRegExp = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;

	useEffect(() => {
		actions.setRedirect(false);
	}, []);

	const formik = useFormik({
		initialValues: {
			full_name: store.full_name,
			email: store.email,
			phone: store.phone,
			address: store.address
		},
		validationSchema: Yup.object({
			full_name: Yup.string().required("Full name is required"),
			phone: Yup.string()
				.matches(phoneRegExp, "Input is not a chilean valid phone")
				.required("Phone is Required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is Required"),
			address: Yup.string().required("Address is Required")
		}),
		onSubmit: values => {
			actions.setRedirect(false);
			if (store.modifyContact) {
				actions.modifyContact(values);
				console.log("here comes the sun");
				setRedirect(true);
			} else {
				actions.addContact(values);
				setRedirect(true);
				console.log("here not");
			}
		}
	});

	return (
		<div className="container">
			{redirect ? <Redirect to="/" /> : ""}
			<div className="display-4 fw-bold text-center mt-4">
				{store.modifyContact ? "Modify Contact" : "Add a new contact"}
			</div>
			<form onSubmit={formik.handleSubmit}>
				{/* Full Name input and error msg alternative*/}
				<div className="row">
					<label
						className="form-label fw-bold mt-2"
						id="full_name"
						htmlFor="full_name">
						Full Name
					</label>
					<input
						placeholder="Full Name"
						className="form-control"
						id="full_name"
						name="full_name"
						type="text"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.full_name}
					/>
					{formik.errors.full_name && formik.touched.full_name ? (
						<div className="bg-light text-danger mt-1">
							*{formik.errors.full_name}
						</div>
					) : null}
				</div>

				{/* Email input and error msg alternative */}
				<div className="row">
					<label
						className="form-label fw-bold mt-2"
						id="email"
						htmlFor="email">
						Email
					</label>
					<input
						placeholder="Enter email"
						className="form-control"
						id="email"
						name="email"
						type="email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{formik.errors.email && formik.touched.email ? (
						<div className="bg-light text-danger mt-1">
							*{formik.errors.email}
						</div>
					) : null}
				</div>

				{/* Phone input and error msg alternative */}
				<div className="row">
					<label
						className="form-label fw-bold mt-2"
						id="phone"
						htmlFor="phone">
						Phone
					</label>
					<input
						placeholder="Enter Phone"
						className="form-control"
						id="phone"
						name="phone"
						type="text"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.phone}
					/>
					{formik.errors.phone && formik.touched.phone ? (
						<div className="bg-light text-danger mt-1">
							*{formik.errors.phone}
						</div>
					) : null}
				</div>

				{/* Address input and error msg alternative */}
				<div className="row">
					<label
						className="form-label fw-bold mt-2"
						id="address"
						htmlFor="address">
						Address
					</label>
					<input
						placeholder="Enter address"
						className="form-control"
						id="address"
						name="address"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.address}
					/>
					{formik.errors.address && formik.touched.address ? (
						<div className="bg-light text-danger mt-1">
							*{formik.errors.address}
						</div>
					) : null}
				</div>

				{/* Submit button and return to contacts link*/}
				<div className="d-grid gap-2 mt-3">
					<button className="btn btn-primary" type="submit">
						Save
					</button>
				</div>
				<Link to="/">or get back to contacts</Link>
			</form>
		</div>
	);
}
