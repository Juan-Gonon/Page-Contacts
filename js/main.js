
function createContacts(contacts){
    container.innerHTML = '';
    const title = document.createElement('h1')
    let tabs = '';


    for(let i=0; i<contacts.length; i++){

        const name = contacts[i][0];
        const lastName = contacts[i][1];
        const number = contacts[i][2];
        const email = contacts[i][3];

        tabs += `
        <div class="tab">
            <input type="radio" name="abrir" id="${i+1}">
            <label for="${i+1}">
              <h2>${i + 1}</h2>
              <h3>${name} ${lastName}</h3>
            </label>
            <div class="content">
              <h4>Numero</h4>
              <p>${number}</p>
              <h4>Correo Electrónico</h4>
              <p>${email}</p>
            </div>
        </div>
    `;
    
    }

    title.innerText = 'Contactos'

    container.appendChild(title)
    container.innerHTML += tabs;
}


function deleteDuplicate(contacts){

  let view = new Set();

  for(let i=0; i<contacts.length; i++){
    let stringContacts = JSON.stringify(contacts[i]);

    if(view.has(stringContacts)){
      alert('No puede ingresar un mismo contacto')
      contacts.splice(i,1);
      i--;
    }else{
      view.add(stringContacts)
    }
  }

  return contacts
}

function orderContacts(contacts){

  for(let i=0; i<contacts.length; i++){
    for(let j=0; j<contacts.length -1; j++){
      if(contacts[j] > contacts[j+1]){
        [contacts[j], contacts[j+1]] = [contacts[j+1], contacts[j]]
      }
    }
  }

  return contacts;

}


function searchContacts(contacts, nombre){
  let nuevoArreglo = []

  for(let i=0; i<contacts.length; i++){
    let name = contacts[i][0];
    let coincidencia = true;

    for(let j=0; j<nombre.length; j++){
      if(name[j] != nombre[j]){
        coincidencia = false;
        break;
      }
    }

    if(coincidencia){
      nuevoArreglo.push(contacts[i])
    }

  }

  return nuevoArreglo;
}



function getContact(data){
    
    contacts.push(data);

    console.log(contacts)
    let duplicateContacts = deleteDuplicate(contacts);
    console.log(duplicateContacts)
    let contactsOrder = orderContacts(duplicateContacts)

    // console.log(duplicateContacts)
  

    createContacts(contactsOrder)

    search.addEventListener('input', (e)=>{
      let searchContact = searchContacts(contactsOrder, search.value);
      createContacts(searchContact)
    })
}