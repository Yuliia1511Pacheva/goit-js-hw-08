import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const data = {};

formEl.addEventListener('submit', onSubmit);
formEl.addEventListener('input', throttle(onInput, 500));

populateFormData();

function onSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onInput(evt) {
    data[evt.target.name] = evt.target.value;
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function populateFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formEl.elements.email.value = parsedData.email;
        formEl.elements.message.value = parsedData.message;
    }
}