// [9:27] Robertas Ankudovičius
// 1. Sukurti knygos tipą, knyga turi turėt bent 5 keys ir id.
// 2. Pakurti knygos įrašymo tipą BookCreationType. Jame neturi būt id. // Naudot omit.
// 3. Parašyt knygos update tipą, kuris į objektą priimtu tik title ir author. // Naudot pick
// 4. Atskirai apsirašyt knygos id tipą.
// 5. Apsirašyt automobilio tipą. Vėliau apsirašyt tipą CarUpdateType naudojant PARTIAL. Susikurt kintamąjį išsibandymui.
// 6. Aprašyt funckija  kuri priima book (be id) ir isideda į savo masyvą bei atvaizduoje log'e visas masyvo knygas.
// 7. Supushint kodą į gitbubą.
// 8. CAO TS 4, 5 tema;
// [9:29] Robertas Ankudovičius
// 0. Susitept rankas su Omit, Pick, Partical. Išsibandyt šiuos pagalbinius tipus
var book = {
    id: 123456,
    name: 'New',
    author: "Don Donatel",
    data: 2022,
    price: 16,
    availability: true,
};
console.log(book);
var book1 = {
    name: 'New',
    author: "Don Donatel",
    data: 2022,
    price: 16,
    availability: true,
};
console.log(book1);
var bookInfo = {
    name: 'New',
    author: "Don Donatel",
    // price: 16,
    // availability:true,
};
console.log(bookInfo);
var bookId = {
    id: 2,
};
console.log(bookId);
var car1 = {
    make: 'VW',
    model: 'Golf',
    year: 2015,
    color: 'White',
    fuel: 'Patrol',
};
console.log(car1);
var carDetails = {
    make: 'VW',
    model: 'Golf',
    year: 2015,
};
console.log(carDetails);
// (6) Aprašyt funckija  kuri priima book (be id) ir isideda į savo masyvą bei atvaizduoje log'e visas masyvo knygas.
var books = [book, book1];
console.log(books);
