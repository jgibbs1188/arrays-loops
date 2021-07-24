
const teamTwo = [{
    name: "Madden",
    email: "maddenpurcell@gmail.com",
    favoriteColor: "Hunter Green",
    id: 1,
    uniqueFact: "Hunter has a pet gecko named Rhae.",
    image: "https://avatars.githubusercontent.com/u/86082231?v=4",
},
{
    name: "Joe",
    email: "joseph.gibbs1188@gmail.com",
    favoriteColor: "Blue",
    id: 2,
    uniqueFact: "Joe has a burn on his left arm.",
    image: "https://avatars.githubusercontent.com/u/83508920?v=4",
},
    {
    name: "Nathan",
    email: "divorcedlawyer1988@hotmail.com",
    favoriteColor: "Red",
    id: 3,
    uniqueFact: "Nathan produces and edits videos.",
    image: "https://avatars.githubusercontent.com/u/86999347?v=4",
},

    {
    name: "Elle",
    email: "hello@ellelawrence.com",
    favoriteColor: "Black",
    id: 4,
    uniqueFact: "Elle has a full sleeve of tattoos.",
    image: "https://avatars.githubusercontent.com/u/86808230?v=4",
}]

const filterName = (array, person) => {
    return array.filter(filteredObj => filteredObj.name === person);
}

console.log(filterName(teamTwo, "Joe"));




