async function addUser(){

    const name = document.getElementById("name").value;

    await fetch("http://localhost:3000/addUser", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({ name })
    });

    alert("User Added Successfully");

    document.getElementById("name").value = "";
}

async function getUsers(){

    const response =
    await fetch("http://localhost:3000/users");

    const users = await response.json();

    const userList =
    document.getElementById("userList");

    userList.innerHTML = "";

    users.forEach(user => {

        const li = document.createElement("li");

        li.innerText = user.name;

        userList.appendChild(li);
    });
}