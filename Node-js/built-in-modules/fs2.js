//to delete a folder

const {rm} = require('node:fs/promises');

(async function (path) {
    try{
        await rm(path, {recursive: true, force: true});
        console.log(`successfully deleted ${path}`)
    }
    catch(e){
        console.error('there was an error:',e.message)
    }
})(`${__dirname}/aizen`)
// console.log(__dirname)
