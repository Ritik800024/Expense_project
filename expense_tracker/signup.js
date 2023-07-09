var form=document.getElementById('form-content1')
form.addEventListener('submit',adduser)

async function adduser(e){
    event.preventDefault()
    const name=event.target.Name.value
    const email=event.target.Email.value
    const pass=event.target.Pass.value
    const obj={
        name,
        email,
        pass
    }
        await axios.post('http://localhost:1478/user/adduser',obj)
        .then((res)=>{
            alert('Signed In Sucessfully!')
            document.location.reload()
        })
        .catch(err=>{
            document.body.innerHTML+=`<h3 style="color:red">${err.message}</h3>`
            if(err.status===400){
                alert('Please fill all the fields')
            }
            if(err.status===401){
                alert('User already exist!')
            }
        })
}