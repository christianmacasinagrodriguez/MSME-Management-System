
//login
let input_login_username = document.getElementById('input_login_username')
let input_login_password = document.getElementById('input_login_password')
let input_login_loginButton = document.getElementById('input_login_loginButton')

//signup
let input_signup_username = document.getElementById('input_signup_username')
let input_signup_firstname = document.getElementById('input_signup_firstname')
let input_signup_lastname = document.getElementById('input_signup_lastname')
let input_signup_password = document.getElementById('input_signup_password')
let input_signup_confirmPassword = document.getElementById('input_signup_confirmPassword')
let input_signup_mobileNumber = document.getElementById('input_signup_mobileNumber')
let signup_security_questions = document.getElementById('signup_security_questions')
let input_signup_securityAnswer = document.getElementById('input_signup_createSecurityAnswer')
let input_signup_signupButton = document.getElementById('input_signup_signupButton')

//message
let div_message = document.getElementById('div_message')
let h3_message = document.getElementById('h3_message')

let Dummy = {
    password: 'test',
    username: 'test'
}
let Users = []
InitializeUsersData()


//Forgot Password
let input_forgotPassword_username = document.getElementById('input_forgotPassword_username')
input_forgotPassword_username.onkeyup = (event)=> {
    if(document.getElementById('div-createNewPassword1').style.display === 'block'){
        document.getElementById('div-createNewPassword1').style.display = 'none';
        document.getElementById('div-createNewPassword2').style.display = 'none';
    } 
        
    let check = false
    let checkUserName = document.getElementById(event.target.id).value

    for(let user in Users) {
        if(checkUserName === Users[user].username || checkUserName === Users[user].mobileNumber){
            check = true
            break
        } else {
            check = false
        }
    }
    if(check){
        document.getElementById('div-createNewPassword1').style.display = 'block';
    } else {
    }

}

let forgot_security_questions = document.getElementById('forgot_security_questions')
forgot_security_questions.onchange = ()=> {
    let currentUser = null
    if(document.getElementById('div-createNewPassword2').style.display === 'block'){
        document.getElementById('div-createNewPassword2').style.display = 'none';     
    }

    for(let user in Users){
        if(input_forgotPassword_username.value === Users[user].username){
            currentUser = Users[user]
        }
    }
    if(forgot_security_questions.value === currentUser.securityQuestion && input_forgot_securityAnswer.value === currentUser.securityAnswer){
        document.getElementById('div-createNewPassword2').style.display = 'block'
    } else {
        
    }

}

let input_forgot_securityAnswer = document.getElementById('input_forgot_securityAnswer')

input_forgot_securityAnswer.onkeyup = (e)=> {
    let currentUser = null
    if(document.getElementById('div-createNewPassword2').style.display === 'block'){
        document.getElementById('div-createNewPassword2').style.display = 'none';
        
    }

    for(let user in Users){
        if(input_forgotPassword_username.value === Users[user].username || input_forgotPassword_username.value === Users[user].mobileNumber){
            currentUser = Users[user]
        }
    }
    if(forgot_security_questions.value === currentUser.securityQuestion && input_forgot_securityAnswer.value === currentUser.securityAnswer){
        document.getElementById('div-createNewPassword2').style.display = 'block'
    } else {
        
    }

}

let input_newPassword = document.getElementById('input_newPassword')
let input_confirmNewPassword = document.getElementById('input_confirmNewPassword')
let input_forgotPassword_forgotButton = document.getElementById('input_forgotPassword_forgotButton')




function InitializeUsersData(){
    if(RetrieveData !== null) {
        return Users = RetrieveData()
    } else {
        return Users = []
    }
    
}




//Creating a constructor
class User {
    constructor(username, firstName, lastName, password, confirmPassword, securityQuestion, securityAnswer, mobileNumber) {
        this.username = username
        this.firstName = firstName
        this.lastName = lastName
        this.password = password
        this.confirmPassword = confirmPassword
        this.securityQuestion = securityQuestion
        this.securityAnswer = securityAnswer
        this.mobileNumber = mobileNumber
    }
}

function Toggle(number) {
    if(number === 0){
        document.getElementById('form_login_forgotpassform').style.display = 'block'
        document.getElementById('form_login_sform').style.display = 'none'
        document.getElementById('form_login_lform').style.display = 'none'
        document.getElementById('button-back').style.display = 'block'

        
    } else if (number === 1) {
        document.getElementById('form_login_forgotpassform').style.display = 'none'
        document.getElementById('form_login_sform').style.display = 'block'
        document.getElementById('form_login_lform').style.display = 'none'
        document.getElementById('button-back').style.display = 'block'

    } else {
        document.getElementById('form_login_forgotpassform').style.display = 'none'
        document.getElementById('form_login_sform').style.display = 'none'
        document.getElementById('form_login_lform').style.display = 'block'
        document.getElementById('button-back').style.display = 'none'

    }
}

function SuccessMessageLogin(message) {
    return new Promise((resolve, reject) => {
        div_message.style.display = 'flex'
        div_message.style.visibility = 'visible'
        div_message.style.backgroundColor = 'aqua'
        div_message.style.color = 'green'
        h3_message.innerText = `Successfully ${message}`
        setTimeout(() => {
            div_message.style.display = 'none'
            resolve('success')      
        }, 3000);
    })
}

function ErrorMessageLogin(message) {
    return new Promise((resolve, reject) => {
        div_message.style.display = 'flex'
        div_message.style.visibility = 'visible'
        div_message.style.backgroundColor = 'lightCoral'
        div_message.style.color = 'red'
        h3_message.innerText = `Failed to ${message}`
        setTimeout(() => {
            div_message.style.display = 'none'
            resolve('error')      
        }, 3000);
    })

}

async function AddUser(){
    let newUser = new User(input_signup_username.value, input_signup_firstname.value, input_signup_lastname.value, input_signup_password.value, input_signup_confirmPassword.value, signup_security_questions.value, input_signup_securityAnswer.value, input_signup_mobileNumber.value)
    console.log(Users)
    Users.push(newUser)
    SaveData()
    await SuccessMessageLogin('added User')
    
    
}

function SaveData() {
    if(Users.length > 0) {
        localStorage.setItem('users', JSON.stringify(Users))
    }
    

}

function RetrieveData() {
    let data =JSON.parse(localStorage.getItem('users'))
    if(Array.isArray(data)) {
        return data
    } else {
        return Users = []
    }
    
}

function ShowPassword(id){
    let el = document.getElementById(`${id}`)

    if(el.type === 'password'){
        el.type = 'text'
    } else {
        el.type = 'password'
    }     
    
}
function checkUser() {
    if(Dummy.username === input_login_username.value && Dummy.password === input_login_password.value) {
        localStorage.setItem('loggedUser', input_login_username.value)
        window.location.href = 'home.html'

    } else {   
        CheckLogin()      
    }
}

async function CheckLogin(){

    if(input_login_username.value.trim() === '' || input_login_password.value.trim() === ''){
        input_login_username.style.border = '3px solid red'
        input_login_username.onkeyup = RemoveBorder;
        input_login_password.style.border = '3px solid red'
        input_login_password.onkeyup = RemoveBorder
        await ErrorMessageLogin('login. Input your Username and Password')

    } else {
        let check = false
        for(let user in Users){
            if(Users[user].username === input_login_username.value && Users[user].password === input_login_password.value) {
                check = true
                break

            } else {   
                check = false
                
            }
        }

        if(check){
            localStorage.setItem('loggedUser', input_login_username.value)
            window.location.href = 'home.html'          
        }else {
            input_login_username.style.border = '3px solid red'
            input_login_username.onkeyup = RemoveBorder;
            input_login_password.style.border = '3px solid red'
            input_login_password.onkeyup = RemoveBorder
            await ErrorMessageLogin('login. Incorrect Username or Password!')

        }    
    }    
}


        

function RemoveBorder(event) {
    event.target.style.border = 'none';
}
async function CheckSignup(){

    let check = false
    for(let user in Users){
        if(input_signup_username.value === Users[user].username){
            check = true
            break
        } else {
            check = false
        }
    }
    if(!check){
        if(input_signup_username.value.trim() === '' || input_signup_firstname.value.trim() === '' ||  input_signup_lastname.value.trim() === '' ||  input_signup_password.value.trim() === '' ||  input_signup_confirmPassword.value.trim() === '' ||  signup_security_questions.value.trim() === '' ||  input_signup_securityAnswer.value.trim() === '' ||  input_signup_mobileNumber.value.trim() === ''){
            input_signup_username.style.border = '3px solid red';
            input_signup_username.onkeyup = RemoveBorder;
            input_signup_firstname.style.border = '3px solid red';
            input_signup_firstname.onkeyup = RemoveBorder;  
            input_signup_lastname.style.border = '3px solid red'; 
            input_signup_lastname.onkeyup = RemoveBorder; 
            input_signup_password.style.border = '3px solid red'; 
            input_signup_password.onkeyup = RemoveBorder; 
            input_signup_confirmPassword.style.border = '3px solid red';
            input_signup_confirmPassword.onkeyup = RemoveBorder;
            signup_security_questions.style.border = '3px solid red'; 
            signup_security_questions.onchange = RemoveBorder;
            input_signup_securityAnswer.style.border = '3px solid red'; 
            input_signup_securityAnswer.onkeyup = RemoveBorder;
            input_signup_mobileNumber.style.border = '3px solid red';
            input_signup_mobileNumber.onkeyup = RemoveBorder;
            await ErrorMessageLogin('Signup. Please fillout all fields!')
         
    
        } else if(input_signup_password.value === input_signup_confirmPassword.value){
            AddUser()

            document.getElementById('form_login_sform').reset()
    
        } else if(input_signup_password.value !== input_signup_confirmPassword.value){
            input_signup_password.style.border = '3px solid red'; 
            input_signup_password.onkeyup = RemoveBorder; 
            input_signup_confirmPassword.style.border = '3px solid red';
            input_signup_confirmPassword.onkeyup = RemoveBorder;
            ErrorMessageLogin("Sign up. Passwords don't match")
           
    }

    } else {
        input_signup_username.style.border = '3px solid red';
        input_signup_username.onkeyup = RemoveBorder;
        ErrorMessageLogin(`Sign up. Username "${input_signup_username.value}" is already taken!`)
    }
}


function ChangePassword(){

    let currentUser = null
    let index = 0
    for(let user in Users){
        if(input_forgotPassword_username.value === Users[user].username || input_forgotPassword_username.value === Users[user].mobileNumber){
            currentUser = Users[user]
            index = user
            break
        }
    }
    if(input_newPassword.value.trim() === '' || input_confirmNewPassword.value.trim() === ''){
        input_newPassword.style.border = '3px solid red';
        input_newPassword.onkeyup = RemoveBorder
        input_confirmNewPassword.style.border = '3px solid red';
        input_confirmNewPassword.onkeyup = RemoveBorder
        ErrorMessageLogin('Change password. Set up your new password!')

    } else if(input_newPassword.value !== input_confirmNewPassword.value) {

        input_newPassword.style.border = '3px solid red';
        input_newPassword.onkeyup = RemoveBorder
        input_confirmNewPassword.style.border = '3px solid red';
        input_confirmNewPassword.onkeyup = RemoveBorder
        ErrorMessageLogin("change password. Passwords don't match!")
    } else {
        let newUser = new User(currentUser.username, currentUser.firstName, currentUser.lastName, input_newPassword.value, input_confirmNewPassword.value, currentUser.securityQuestion, currentUser.securityAnswer, currentUser.mobileNumber)
        Users.pop(Users[index])
        Users.push(newUser)
        SaveData()
        document.getElementById('form_login_forgotpassform').reset()
        SuccessMessageLogin('changed password!')
    }
}
input_signup_signupButton.onclick = CheckSignup
input_login_loginButton.onclick = checkUser
input_forgotPassword_forgotButton.onclick = 
ChangePassword