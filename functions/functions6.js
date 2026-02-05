// passed object destructured in function parameter list:

let user = { name: "Joe", id: "010101" }

function userId({ id, name }) {
    console.log(id + ":" + name);
}
userId(user); // 42

function userId2(userObj) {
    const { id, name } = userObj;
    console.log(id + ":" + name);
}
userId2(user); // 42

// Old way, no destructing at all
function userId3(userObj) {
    var id = userObj.id;
    var name = userObj.name;
    console.log(id + ":" + name);
}
userId3(user); // 42