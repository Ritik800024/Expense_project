var form=document.getElementById('form-content1')

form.addEventListener('submit',validate)

async function validate(){
    event.preventDefault()
    const email=event.target.Email.value
    const pass=event.target.Pass.value
    const obj={
        email,
        pass
    }
    await axios.post('http://localhost:1478/user/finduser',obj)
    .then((res)=>{
        alert(res.data.message)
        localStorage.setItem("token",res.data.token)
        window.location.href='./expense.html'
    })
    .catch(err=>{
        document.body.innerHTML +=`<div style="color:red">${err.message}</div>`
    })

}