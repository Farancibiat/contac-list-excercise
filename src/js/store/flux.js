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
						console.log(data);
					})
					.catch(err => setStore({ contacts: err }));
			}
		}
	};
};
export default getState;
