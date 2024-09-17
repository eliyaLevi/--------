function onOff(){
    let divR = document.querySelector(".r")
    if( divR.style.display == 'block'){
        divR.style.display = 'none';
    }
    else{
        divR.style.display = 'block'
    }
    
}



async function  feachUser(){
    const responce = await fetch('https://randomuser.me/api/')
    const data = await responce.json()
    console.log(data);
    return data
    // creatUseres(data.results)
}

function creatUseres(useres){
        forEach(user => {
        const body = document.querySelector("body")
        const divFullName = document.createElement("div")
        divFullName.classList = "fullName"
        divFullName.textContent = `${user.Name.first} ${user.Name.last}`
        body.appendChild(divFullName)
        


        
    });
}

feachUser()


