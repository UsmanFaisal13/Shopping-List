const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click',() => {
  const Myitems = input.value;
  input.value = '';
  const li = document.createElement('li');
  const item = document.createElement('span');
  const dlt = document.createElement('button');
  item.textContent = Myitems;
  dlt.textContent = 'Delete';
  
  li.appendChild(item);
  li.appendChild(dlt);
  list.appendChild(li);
  dlt.addEventListener('click',() => {
    li.remove();
  });
})