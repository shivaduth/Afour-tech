// interface CartItem {
//   id: number;
//   title: string;
//   variantId?: number;
// }
var User = /** @class */ (function () {
    function User(name, id) {
        this.name = name;
        this.id = id;
    }
    return User;
}());
var user = new User('Dog', 1);
console.log(user.id); // readable
user.name = 'Harold'; // writable
user.id = 5; // not writable
console.log("User:", user);
