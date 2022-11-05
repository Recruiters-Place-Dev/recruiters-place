import styled from "styled-components";

import { iProgressProps } from "../../formregister";

interface iModalContainerProps {
  progress: iProgressProps;
}

const ModalContainer = styled.div<iModalContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  background: rgba(5, 2, 6, 0.8);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  > div {
    position: absolute;
    max-width: 864px;
    width: 100%;
    height: 623px;
    margin: 0 auto;
    padding: 30px 0;
    background-color: #fff;
    border-radius: 8px;

    @media (max-height: 690px) {
      max-width: 768px;
      height: 500px;
    }

    .back {
      display: ${({ progress }) => (progress.phase === 5 ? "none" : "block")};
      position: absolute;
      right: 20px;
      background-color: transparent;
      color: var(--color-primary);
    }

    .progressBarContainer {
      max-width: 400px;
      width: 100%;
      height: 10px;
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      gap: 2px;

      div {
        width: 98.5px;
        height: 10px;
      }

      .completed {
        background-color: var(--color-success);
      }

      .onProgress {
        background-color: var(--color-primary);
      }

      .notCompleted {
        background-color: #d9d9d9;
      }
    }

    form {
      button:first-of-type {
        display: inline-flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: 331px;
        height: 48px;

        background: #1da1f2;
        color: #fefefe;
        border-radius: 8px;
        border: none;

        padding: 14px 116px 15px;

        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;

        text-decoration: none;
        transition: 0.4s;
        z-index: 1000;

        &:hover {
          cursor: pointer;
          filter: brightness(1.2);
        }
      }

      button:last-of-type {
        background-color: transparent;
        font-family: "Roboto";
        font-style: normal;
        font-size: 16px;
        line-height: 23px;

        padding: 14px 116px 15px;
      }
    }

    form.progress-2,
    form.progress-3 {
      max-width: 400px;
      width: 100%;
      max-height: 385px;
      margin: 39px auto 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      gap: 28px;
      overflow-y: scroll;

      .controls {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        gap: 21px;

        .working {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          gap: 10px;

          label {
            font-size: 20px;
          }
        }
      }
    }

    form.progress-4 {
      max-width: 400px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      gap: 3rem;

      .techslist {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        gap: 3rem;

        input {
          width: 70px;
          height: 70px;
        }
      }

      button:last-of-type {
        background: #1da1f2;
      }
    }

    .RegisterCompleted {
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
  }
`;

export default ModalContainer;
