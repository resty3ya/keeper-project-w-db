import styled from "styled-components";

const Wrapper = styled.section`
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .notes {
    background: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 20%;
    margin: 16px;
    float: left;
  }

  .note-button {
    position: relative;
    float: right;
    margin-right: 10px;
    color: #f5ba13;
    border: none;
    width: 36px;
    height: 36px;
    cursor: pointer;
    outline: none;
    top: 1.5rem;
  }

  .status {
    position: relative;
    float: left;
    top: 2rem;
  }

  .author {
    position: relative;
    top: 1.5rem;
    right: 3.5rem;
  }

  .note-edit-button {
    position: relative;
    float: left;
    left: 5rem;
    margin: 9px;
    color: rgb(245, 186, 19);
    border: medium;
    width: 36px;
    height: 36px;
    cursor: pointer;
    outline: none;
    top: 1.6rem;
    font-size: 0.9rem;
  }

  ${
    "" /* .actions {
    padding-top: 1rem;
  } */
  }

  @media (min-width: 1120px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Wrapper;
