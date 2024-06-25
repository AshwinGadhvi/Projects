const button = document.querySelector('#submit');

button.addEventListener('click',()=>{
    const input = document.querySelector('#item').value;
    const option = document.createElement('option');
    option.innerHTML = `<option value="${input}">${input}</option>`;
    document.getElementById("visit_list").appendChild(option);
})