btnGuardar.onclick = (e)=>{
    e.preventDefault();

    const formData = new FormData(form);
    const getData = formData.getAll('form1');


    let resultado = ()=>{
        let nuevoArreglo = [];

        for(let i=0; i<getData.length; i++){
            if(getData[i] != ''){
                nuevoArreglo.push(getData[i])
            }else{
                nuevoArreglo = []
                break;
            }
        }

        return nuevoArreglo;
    }

    const getDataContact = resultado()

    if(getDataContact != ''){
        getContact(getDataContact)
    }
    
}




