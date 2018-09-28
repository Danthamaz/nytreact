import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { ListItem } from "../../components/List";

class Saved extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>

            {this.state.articles.length ? (
              <div>
                {this.state.articles.map(article => (
                  <ListItem
                    key={article._id}
                    id={article._id}
                    title={article.title}
                    date={article.date}
                    url={article.url}
                    deleteArticle={this.deleteArticle}
                  />
                ))}
              </div>
            ) : (
              <h2 className="text-center">There are no Saved Articles.</h2>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
