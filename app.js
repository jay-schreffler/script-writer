const characterOne = document.querySelector('#character-1-input');
const characterTwo = document.querySelector('#character-2-input');
const characterSelect = document.querySelector('#character-select');
const characterChoices = [];
const applyCharacters = document.querySelector('#set-line');

//add characters to array

applyCharacters.addEventListener('click', () =>{
    characterChoices.push(characterOne.value);
    characterChoices.push(characterTwo.value);
    addCharacterChoices();
    console.log(characterChoices)
})

function addCharacterChoices() {
    for(let i = 0; i < characterChoices.length; i++) {
        let options = document.createElement('option');
        characterSelect.append(options);
        options.setAttribute('value',characterChoices[i]);
        options.textContent = characterChoices[i];
    }
}
