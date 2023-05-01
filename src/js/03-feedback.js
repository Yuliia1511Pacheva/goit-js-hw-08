import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const data = {};

formEl.addEventListener('submit', onSubmit);
formEl.addEventListener('input', throttle(onInput, 500));

populateFormData();

function onSubmit(evt) {
    evt.preventDefault();
    const email = evt.currentTarget.elements.email.value;
    const message = evt.currentTarget.elements.message.value;

    if (!email || !message) {
     alert("Fill all fields!")
 };
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onInput(evt) {
    data[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function populateFormData() {
    const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
   
    if (parsedData) { 
        formEl.elements.email.value = parsedData.email || '';
        formEl.elements.message.value = parsedData.message || '';
    }
}

