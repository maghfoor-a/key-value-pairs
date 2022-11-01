import { exit } from "process";

/*Write a function, `printAllKeyValuePairs(obj)` which takes an object with unknown content and prints to console, one per line, each **key** and **value** in the object.

const characters = {
  Bruce: "Hulk",
  Peter: "Spiderman",
  Ororo: "Storm"
};

the expected output would be

Bruce Hulk
Peter Spiderman
Ororo Storm


@params: object
@returns: void

PROGRAMME printAllKeyValuePairs(CHARACTERS):
    FOR EACH KEY_VALUE_PAIR in CHARACTERS:
        PRINT KEY + '' + VALUE
    END FOR.
END.

*/
function printAllKeyValuePairs(characters: {[key: string]: any}): void {
    for (const key in characters) {
        console.log(key, characters[key])
    }
}
printAllKeyValuePairs({
    Bruce: "Hulk",
    Peter: "Spiderman",
    Ororo: "Storm"
  });


