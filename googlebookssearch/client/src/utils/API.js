import axios from "axios";
import key from "./googlebookssearch/.env";

// Export an object containing methods we'll use for accessing the Googlebooks API

export default {
    //Gets books via the API call
    getRandomBook: function(author) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + author + ":keyes&key=" + key);
    },

    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
      },

    // Deletes the book with the given id which will only be in the saved books page
    deleteBook: function(id) {
    return axios.delete("/api/savedbooks/" + id)
    },

    // Gets the saved book with the given id
    getBook: function(id) {
    return axios.get("/api/savedbooks/" + id);
  },
};

    