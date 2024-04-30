async function signupFormHandler(event) {
    event.preventDefault();

    console.log(event, "hello");

    const usernameE1 = document.querySelector('#username-signup').value.trim();
    const emailE1 = document.querySelector('#email-signup').value.trim();
    const passwordE1 = document.querySelector('#password-signup').value.trim();

    if (username && email&& password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameE1,
                email: emailE1,
                password: passwordE1
            }),
            headers: { 'Content-Type': 'application/json'}
        });
        if (response.ok) {
            console.log('success');

            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signup').addEventListener('submit', signupFormHandler);