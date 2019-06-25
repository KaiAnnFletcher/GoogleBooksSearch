import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import searchForm from "../components/searchForm";


class searchForm extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    API.getRandomBook()
      .then(res => this.setState({ author: res.data.message }))
      .catch(err => console.log(err));
  }


  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Author Should I Search?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              {/* <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" /> */}
              <FormBtn>Submit Author</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <SaveBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default searchedBooks;