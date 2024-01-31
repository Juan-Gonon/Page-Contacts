
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




function getContact(data){
    
    contacts.push(data);
    let nuevoContacts = []

    for(let i=0; i<contacts.length; i++){
      let isDuplicate = false;

      for(let j=0; j<nuevoContacts.length; j++){
        if(JSON.stringify(contacts[i]) === JSON.stringify(nuevoContacts[j])){
          isDuplicate = true;
          alert('Contacto Repetido')
          break;
        }
      }

      if(!isDuplicate){
        nuevoContacts.push(contacts[i])
      }

    }

    createContacts(nuevoContacts)
}