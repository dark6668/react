import React from "react";

export default function Login() {

    return (

        <div className="containerForm">

            <form>

                <div>Mail <input id="mail" type="mail" placeholder="david@dads" required></input></div>
                <div>Password<input id="password" type="password" placeholder="1234" required></input></div>




            </form >
            <button type="submit" onClick={login}>submit</button>
        </div>
    )
}


function login() {
    const form = document.querySelector('form');
    form.click = (event) => { event.preventDefault(); }
    let mail = document.querySelector('#mail').value
    let password = document.querySelector('#password').value

    const user = {

        mail: 'david@dads',
        password: "1234"
    }


    let info = {
        mail: mail,
        password: password

    }
    if (info.password === user.password && info.mail === user.mail) {

        window.open('http://localhost:3000/page1')

    }
}

