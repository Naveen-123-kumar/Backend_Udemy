const fs=require('fs')

const getNotes = function () {
    return 'Your notes...'
}
const addNotes=function(title,body){ 
const notes=loadNotes();
const dublicateNotes=notes.filter(function(note){
    return note.title=title
})
if(dublicateNotes.length===0){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes);
    console.log('New notes added');
}
else{
    console.log('Note title added');
}

}
const removeNote=function(title){
    console.log(title);
}

const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return []
    }
    
}
module.exports ={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNote:removeNote,
}