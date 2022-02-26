const loadData = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data => displayBuddy(data))
}
loadData();
const displayBuddy = (data) =>{
    const buddies = data.results;
    const buddiesContainer = document.getElementById('buddies');

    for(const buddy of buddies){
        console.log(buddy.email);
        const p = document.createElement('p');
        p.innerText = `First Name: ${buddy.name.first} Last Name: ${buddy.name.last}`
        buddiesContainer.appendChild(p);


    }
}