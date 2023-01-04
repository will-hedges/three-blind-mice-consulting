const applicationState = {
    computers: [],
    employees: [],
};

const API = "http://localhost:8088";

const mainContainer = document.querySelector("#container");

const dispatchStateChangedCustomEvent = () => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
};

export const fetchAPIResource = (resource) => {
    return fetch(`${API}/${resource}`)
        .then((response) => response.json())
        .then((data) => {
            applicationState[resource] = data;
        });
};

export const getApplicationState = (resource) => {
    return applicationState[resource].map((data) => ({ ...data }));
};

export const postObjToAPI = (obj, resource) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    };

    return fetch(`${API}/${resource}`, fetchOptions)
        .then((response) => response.json())
        .then(dispatchStateChangedCustomEvent());
};
