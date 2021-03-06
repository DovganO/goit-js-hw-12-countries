const errorBox = document.querySelector(".form__error-box");
import { error } from "@pnotify/core";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";
import getRefs from "./getRefs.js";
const refs = getRefs();

// отображается ошибка на странице, если ее еще на странице нет
function errorMsgMarkUp() {
  const errorMsg = document.querySelector(".pnotify");
  if (!errorMsg) {
    refs.countriesList.innerHTML = "";
    error(`Too many matches found.
    Please enter a more specific query!`);
  }
}

// удаляется ошибка при создании элемента страны
function hideError() {
  const errorMsg = document.querySelector(".pnotify-container");
  if (errorMsg) {
    errorMsg.classList.add("hidden");
  }
}

export default { errorMsgMarkUp, hideError }