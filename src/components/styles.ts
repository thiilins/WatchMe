import styled from "styled-components";

export const ButtonContainer = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 20rem;
    width: 100%;

    border: 0;
    background: var(--background-button);
    padding: 1.1875rem 2rem;
    border-radius: 0.25rem;

    font-size: 1.125rem;
    color: var(--white);

    &:hover {
      background: var(--background-button2);
    }

    transition: background 200ms;

    & + button {
      margin-top: 1rem;
    }

    &:first-child {
      margin-top: 0;
    }

    &.selected {
      background: var(--background-button2);
      color: var(--yellow);
    }
  }
`;
export const MovieCardContainer = styled.div`
  .movie-card {
    position: relative;

    img {
      width: 14.31rem;
      height: 21.25rem;
    }

    > div {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      display: flex;
      justify-content: center;

      background: rgba(31, 34, 41, 0.5);

      .movie-info {
        max-width: 12.31rem;
        width: 100%;

        display: flex;
        flex-direction: column;

        > span {
          font-weight: 600;
          font-size: 1rem;
          color: #fbfbfb;

          margin-top: auto;
          margin-bottom: 0.5rem;
        }

        .meta {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          margin-bottom: 1rem;

          div {
            display: flex;
            align-items: center;

            font-weight: 600;
            color: var(--gray);

            svg {
              color: #fae800;
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
  }
`;
