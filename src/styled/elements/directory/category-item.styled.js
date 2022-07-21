import styled from "styled-components";

export const StyledCategoryItem = styled.li`
  height: 400px;
  min-width: 30%;
  height: 240px;
  border: 1px solid black;
  padding-right: 20px;
  margin-bottom: 20px;
  overflow: hidden;

  &:nth-of-type(5n + 4) {
    min-width: 49%;
    height: 380px;
  }

  &:nth-of-type(5n + 5) {
    min-width: 49%;
    height: 380px;
  }

  .background-image {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${({image}) => (image)});
    background-position: center;
    background-size: cover;
  }

  .title {
    position: relative;
    padding: 5px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    background-color: rgba(255, 255, 255, 0.5);

    span {
      display: block;
      text-align: center;
      padding-top: 5px;
      font-weight: 400;
    }
  }

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .category-body-container {
      opacity: 0.9;
    }
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
` 