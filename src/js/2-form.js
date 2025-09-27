const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

 
const savedData = JSON.parse(localStorage.getItem(storageKey));
if (savedData) {
  formData.email = savedData.email ?? '';
  formData.message = savedData.message ?? '';
  Object.entries(formData).forEach(([key, value]) => {
    if (form.elements[key]) form.elements[key].value = value;
  });
}

 
form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

 
function onInput(event) {
  const { name, value } = event.target;
  if (formData[name] !== value.trim()) {
    formData[name] = value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
}

 
function onSubmit(event) {
  event.preventDefault();
  const { email, message } = form.elements;

  if (!email.value.trim() || !message.value.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log({ ...formData });  
  localStorage.removeItem(storageKey);  
  form.reset();  
  formData.email = '';
  formData.message = '';
}