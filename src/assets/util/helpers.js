var axios = require('axios');

let books = [];
function getUpdatedList (list){
        let len = list.length;
        for(let i = 0; i< len; i++){
            list[i].status = 'Add';
        }
        return list;
    }
module.exports = {
    getBooks: function(query){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            .then(function(response){
                return getUpdatedList(response.data.items);
            })
    },
    addBookInList : function(book){
        books.push(book);
    },
    getAddedBooks : function(){
        return books;
    },
        
};
