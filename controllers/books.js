const {default: mongoose } = require('mongoose');
const book = require('../models/book');

module.exports = {
    home,
    all,
    show: showPage,
    new: newPage,
    // edit,
    create: createBook,
    // update,
    // delete
}



//*============================= GET FUNCTIONS=========================//
function home(req, res){
    res.render('books/home');
}

async function all(req, res){
    try {
        const books = await book.find({})
        console.log(books)
        res.render('books/all', {
            books
        });
    } catch { 
        console.log(error)
    }
}





async function showPage(req, res) {
    try {
        const book = await Book.findById(req.params.id)
        res.render('books/show', {
            book
        })
    } catch {
        console.log('error')
    }
}

function newPage(req, res){
    res.render('books/new')
}



// *============================= ACTIONS FUNCTIONS =========================//

async function createBook(req, res){
 try {
        await book.create(req, body)
        res.redirect('/all')
 } catch {
    console.log('error')
    }
}




