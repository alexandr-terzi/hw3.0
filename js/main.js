let userName = prompt('What is your name', '').trim();
userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

let lastName = prompt('What is your last name', '').trim();
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

let userEmail = prompt('Enter your Email', "").replaceAll().toLowerCase();

let dateOfBirth = +prompt('Enter your date of birth', "");
let today = new Date();
thisYear = today.getFullYear();
age = thisYear - dateOfBirth;

if (!userEmail.includes('@')) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
}
else if(userEmail.startsWith('@')) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`;
}
else if(userEmail.endsWith('@')) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
}
else {
    userEmail = `<b>${userEmail}</b>`;
}

document.write(`
    <ul>
        <li> Full name: <b>${userName} ${lastName}</b> </li>
        <li> Email: ${userEmail} </li>
        <li> Age: <b>${age}</b> </li>
    </ul>`);
