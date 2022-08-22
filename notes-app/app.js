const getNotes=require('./notes.js');
const yargs=require('yargs')
// const msg=getNotes();
// console.log(msg);
// const chalk = require('chalk')
// const greenMsg=chalk.blue('success for me!')
// console.log(greenMsg)

// const add=require('./utils');
// const sum=add(2,3);
// console.log(sum);
// const fs=require('fs');
// fs.writeFileSync('notes-text','This file was created by Node js.');
// fs.appendFileSync('notes-text',' I live in Delhi');
// const Mame='Naveen'
// console.log(Mame)
// import chalk from 'chalk';
// const m=chalk.blue('success')
// console.log(m)
// const validator=require('validator');
// console.log(validator.isEmail('naveen'));
// console.log(process.argv[2])
const getNotes=require('./notes.js');
const notes = require('./notes.js');
const { argv } = require('yargs');
const msg=getNotes()
console.log(msg)
// const command=process.argv[2]

// if(command==='add'){
//     console.log('adding note!')
// }
// else if(command==='remove'){
//     console.log('Removing note!');
// }
// console.log(process.argv)
yargs.command({
    command:'add',
    describe: 'adding a new command',
    builder:{
        title:{
                describe:'Note title',
                demandOption:true,
                type:'string',
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
  
    handler: function(argv){
        console.log('Adding command'+argv.title)
        console.log('Adding command'+argv.body)

    }
})
yargs.command({
    command:'read',
    describe:'Read a note',
    handler:function(argv){
        // console.log('Reading a note')
        notes.removeNote(argv.title)
    }
})
console.log(yargs.argv)
// console.log(yargs.argv)
// let fs=require('fs')
// fs.writeFileSync('no.txt',"Hi")
// fs.unlinkSync('no.txt')
// const notes=require('./notes.js')
// console.log(notes())