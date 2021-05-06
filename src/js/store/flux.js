const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			full_name: "",
			email: "",
			phone: "",
			address: "",
			id: "",
			modifyContact: false,
			redirect: false
		},
		actions: {
			setRedirect: estado => {
				setStore({ redirect: estado });
			},
			startModify: contact => {
				setStore({ full_name: contact.full_name });
				setStore({ email: contact.email });
				setStore({ phone: contact.phone });
				setStore({ address: contact.address });
				setStore({ id: contact.id });
				setStore({ modifyContact: true });
				getActions().setRedirect(true);
			},
			restartData: () => {
				setStore({ full_name: "" });
				setStore({ email: "" });
				setStore({ phone: "" });
				setStore({ address: "" });
				setStore({ id: "" });
				setStore({ modifyContact: false });
			},
			getContacts: () => {
				fetch(
					"https://assets.breatheco.de/apis/fake/contact/agenda/pehuens"
				)
					.then(resp => resp.json())
					.then(data => {
						setStore({ contacts: data });
					})
					.catch(err => setStore({ contacts: err }));
			},
			addContact: data => {
				data["agenda_slug"] = "pehuens";
				fetch(`https://assets.breatheco.de/apis/fake/contact/`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data)
				})
					.then(resp => resp.json())
					.then(data => {
						if (data.id) getActions().getContacts();
						else {
							console.log(data.msg);
						}
					})
					.catch(err => {
						console.log("error en Fetch: ", err);
					});
			},
			modifyContact: contact => {
				contact["agenda_slug"] = "pehuens";
				fetch(
					`https://assets.breatheco.de/apis/fake/contact/${
						getStore().id
					}`,
					{
						method: "PUT",
						body: JSON.stringify(contact),
						headers: { "Content-Type": "application/json" }
					}
				)
					.then(resp => resp.json())
					.then(data => {
						if (data.id === getStore().id) {
							getActions().getContacts();
						}
						getActions().restartData();
					})
					.catch(err => {
						console.log("error en Fetch: ", err);
						getActions().restartData();
					});
			},
			delContact: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						if (data.msg === "ok") getActions().getContacts();
						else {
							console.log(data.msg);
						}
					})
					.catch(err => {
						console.log("error en Fetch: ", err);
					});
			}
		}
	};
};
export default getState;
