import { fetchAPIResource } from "./DataAccess.js";
import { ThreeBlindMiceConsulting } from "./ThreeBlindMiceConsulting.js";

const mainContainer = document.querySelector("#container");

const render = () => {
    fetchAPIResource("computers")
        .then(() => fetchAPIResource("employees"))
        .then(() => (mainContainer.innerHTML = ThreeBlindMiceConsulting()));
};

render();
