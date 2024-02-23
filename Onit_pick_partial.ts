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

// (1)
type BookType ={
    id: number;
    name: string;
    author: string;
    data: number;
    price: number;
    availability:boolean;
};

const book: BookType = {
    id:123456,
    name: 'New',
    author: "Don Donatel",
    data: 2022,
    price: 16,
    availability:true,
}; 
console.log(book)

// (2)
type BookCreationType = Omit<BookType, "id">
 
const book1: BookCreationType = {
    name: 'New',
    author: "Don Donatel",
    data: 2022,
    price: 16,
    availability:true,
}; 
console.log(book1)


// (3)
type BookUpdateType = Pick<BookType, 'name' | "author">

const bookInfo: BookUpdateType = {
    name: 'New',
    author: "Don Donatel",
    // price: 16,
    // availability:true,
}; 
console.log(bookInfo)

// (4)

type BookId = {
    id: number;
};

const bookId: BookId = {
    id: 2,
};
console.log(bookId);

// (5) Apsirašyt automobilio tipą. Vėliau apsirašyt tipą CarUpdateType naudojant PARTIAL. Susikurt kintamąjį išsibandymui.
type CarType = {
    make: string;
    model: string;
    year: number;
    color: string;
    fuel: string;
};

const car1 = {
    make: 'VW',
    model: 'Golf',
    year: 2015,
    color: 'White',
    fuel: 'Patrol',
};
console.log(car1);

type CarUpdateType = Partial<CarType>

const  carDetails: CarUpdateType = {
    make: 'VW',
    model: 'Golf',
    year: 2015,
}
console.log(carDetails)

// (6) Aprašyt funckija  kuri priima book (be id) ir isideda į savo masyvą bei atvaizduoje log'e visas masyvo knygas.

const books: BookCreationType[] = [book, book1];
console.log(books);