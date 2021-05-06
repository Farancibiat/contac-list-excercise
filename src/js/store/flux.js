const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
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
