const inputs = document.querySelectorAll('input');

function handleUpdate (){
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));
