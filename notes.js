const fs = require('fs')
const chalk = require('chalk')
// const getNotes = function(){
//     return 'Your Notes...'
// }

//const addNote = function(title,body) {
const addNote = (title,body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })
    // Filter function traverses through the whole array irrespective of it satisfied the condition
    // Find function stops when the condition is satisfied. 
    debugger
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    //if (duplicateNotes.length === 0) {
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added'))
    } else {
        console.log(chalk.red.inverse('Note Tile Taken!'))
    }   
}

//const removeNote = function(title){
const removeNote = (title) => {
    const notes = loadNotes()
    //console.log(title)
    // Array Filter function creates a new array with returned values. 
    // const newNotes = notes.filter(function(note){
    //     return note.title != title
    // })
    const newNotes = notes.filter((note) => note.title != title)
    if (newNotes.length != notes.length) {
        saveNotes(newNotes)
        console.log(chalk.green.inverse('Successfully removed Note ' + title))
    } else {
        console.log(chalk.red.inverse('No notes found with title \"' + title + '\" to remove'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const rdNote = notes.find((note) => note.title === title)
    if (rdNote) {
        console.log(chalk.inverse('Title : '+ rdNote.title))
        console.log('Body : '+ rdNote.body)
    }    
    else {
        console.log(chalk.red.inverse('No Note Found with title ' + title))
    }

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return [] //empty array
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.bold('Your Notes'))
    notes.forEach((note) => {
        console.log(chalk.green(note.title))
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

module.exports = {
    //getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}