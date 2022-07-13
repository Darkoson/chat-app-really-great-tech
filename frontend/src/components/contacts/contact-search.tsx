import React, { FC } from "react";
import styled from "styled-components";

interface SearchProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactSearch: FC<SearchProps> = ({ handleChange }) => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="15"
        height="15"
        className="icon search-icon">
        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
      </svg>
      <input
        type="text"
        name=""
        id=""
        placeholder="search for a contact"
        className="search-input"
        onChange={handleChange}
      />
    </Container>
  );
};

export default ContactSearch;

const Container = styled.div`
  position: relative;
  margin: 2rem auto;
  .search-input {
    font-size: 1rem;
    border-radius: 17px;
    padding: 0.1rem 2rem 0.1rem 3rem;
    color: var(--blue);
    border: 0.2px solid var(--blue);
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 1rem;
    fill: var(--blue);
    transform: translateY(-50%);
  }

  input::placeholder {
    color: var(--blue);
  }
`;
