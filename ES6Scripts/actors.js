let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

   // 1 - // Who is the Academy Member whose ID is 187?

   const actor187 = academyMembers.find((actor) => actor.memID === 187);

   console.log(actor187.name)

   // 2  Who has been in at least 3 films

   const filterFilms = academyMembers.filter((three) => three.films.length > 2);

   const results = filterFilms.map((actor) => actor.name);

   console.log(`${results} have been in more than 3 films`)

   // 3 // Who has a name that starts with "Bob"?

   const startswithB = academyMembers.filter((actor) => actor.name.indexOf("Bob") !== -1);

   const display = startswithB.map((actorName) => actorName.name);

   console.log(display)

   //Which Academy Members have been in a film that starts with "A"
   const firstMemberWithA = academyMembers.find((member) => {
    return member.films.filter((film) => film.indexOf("A") === 0).length > 0;
});

if (firstMemberWithA) {
    console.log(firstMemberWithA.name);
} else {
    console.log("No Academy Member has been in a film that starts with 'A'");
}



