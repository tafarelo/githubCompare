import React, { Component } from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import CompareList from "../components/CompareList/index";
import api from "../services/api";
import moment from "moment";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  align-items: center;
`;

const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: white;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? "2px solid #F00" : "0")};
  }

  button {
    padding: 0 20px;
    height: 55px;
    margin-left: 10px;
    color: #fff;
    background: #63f5b0;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: #52d89f;
    }
  }
`;

export default class Main extends Component {
  state = {
    repositories: [],
    inputValue: "",
    repositoryError: false,
    loader: false
  };

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loader: true });

    try {
      const response = await api.get(`/repos/${this.state.inputValue}`);
      response.data.ultimoCommit = moment(response.data.pushed_at).fromNow();

      this.setState({
        repositories: [...this.state.repositories, response.data],
        inputValue: "",
        loader: false
      });
      this.setState({ repositoryError: false });
    } catch (e) {
      this.setState({ repositoryError: true });
      console.log(e);
    } finally {
      this.setState({ loader: false });
    }
  };
  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form
          onSubmit={this.handleAddRepository}
          withError={this.state.repositoryError}
        >
          <input
            type="text"
            placeholder="usuario/repositório"
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
          />
          <button type="submit">
            {this.state.loader ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "OK"
            )}
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
