import styled from "styled-components";

const Wrapper = styled.section`
  ${
    "" /* border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem; */
  }

  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    ${
      "" /* margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%; */
    }
    position: relative;
    width: 480px;
    margin: 30px auto 20px auto;
    background: #fff;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }

  .form-center-input {
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
  }

  .form-center-textarea {
    width: 100%;
    border: medium;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
    height: 100px;
    vertical-align: top;
    line-height: 1.2;
    padding-bottom: 60px;
  }

  .form-btn {
    ${
      "" /* align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center; */
    }
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #f5ba13;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
