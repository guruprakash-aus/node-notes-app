//First Program 
/*const fs = require('fs')

fs.writeFileSync('notes.txt','My name is Guruprakash Rajendran')

//
fs.appendFileSync('notes.txt','\n This is the second Line')
*/

// const add = require('./utils.js')

// const sum = add (4, -2)

// console.log(sum)
// const validator = require('validator')
 const chalk = require('chalk')
 const yargs = require('yargs')
 const notes = require('./notes.js')

 //customize yargs version
 yargs.version('1.1.0')

 //create add command
 yargs.command({
     command: 'add',
     describe: 'Add a new note',
     builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, //By default it is false
            type: 'string' //Otherwise it will default to boolean value
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
     },
    //  handler: function(argv){
    //      //console.log('Adding a new note!', argv)
    //      //console.log('Title : ' + argv.title)
    //      //console.log('Body : ' + argv.body)
    //      notes.addNote(argv.title,argv.body)
    //  }
     handler(argv){
        notes.addNote(argv.title,argv.body)
    }
 })

 //create remove command
 yargs.command({
     command : 'remove',
     describe : 'Remove a new note',
     builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, //By default it is false
            type: 'string' //Otherwise it will default to boolean value
        }
     },
    //  handler: function(argv){
    //      //console.log('Remove a new note')
    //      notes.removeNote(argv.title)
    //  }
     handler(argv){
        notes.removeNote(argv.title)
    }
 })

 //create list command
 yargs.command({
     command : 'list',
     describe : 'List all the notes',
    //  handler : function(){
    //      console.log('List out all notes')
    //  }
     handler(){
        //console.log('List out all notes')
        notes.listNotes()
     }
 })

 //create read command
 yargs.command({
     command : 'read',
     describe: 'Read a note',
     builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, //By default it is false
            type: 'string' //Otherwise it will default to boolean value
        }
     },
    //  handler : function(){
    //      console.log('Read a note')
    //  }
     handler(argv){
        //console.log('Read a note')
        notes.readNote(argv.title)
     }
 })
 //add, remove, read, list
 //console.log(yargs.argv)

 yargs.parse()



//const command = process.argv

 //console.log(process.argv)
 /*if (command == 'add') {
    console.log('Adding Note')
 } else if (command == 'remove') {
     console.log('Remove Note')
 }

console.log(command) */
//  const message = getNotes()

//  console.log(message)

// console.log(validator.isEmail('prakashgururgmail.com'))

//  console.log(chalk.blue.inverse('Success'))

//console.log("My name is Guru")

// console.log(process.argv)