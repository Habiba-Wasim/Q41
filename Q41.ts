// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void{
    for (const magician of magicians){
        console.log(magician);
        
    }
}
const magicians: string[] = ["David Copperfield", "Houdini", "Dynamo", "Penn & Teller"];
show_magicians(magicians)