import styled, { css } from "styled-components";

import html from "../../../../assets/html.svg";
import cssLogo from "../../../../assets/css.png";
import js from "../../../../assets/js.svg";
import react from "../../../../assets/react.svg";
import ts from "../../../../assets/ts.svg";
import node from "../../../../assets/node.png";
import angular from "../../../../assets/angular.svg";
import vue from "../../../../assets/vue.png";

interface iCheckbox {
  id: string;
}

interface iImgStyled {
  id?: string;
  isActive?: boolean;
}

export const Checkbox = styled.input<iCheckbox>`
  visibility: hidden;
`;

export const BoxStyled = styled.div`
  width: 100px;
  height: 100px;
`;

export const LabelImg = styled.label`
  min-width: 20px;
  min-height: 20px;
`;

export const ImgStyled = styled.img.attrs(({ id }) => {
  switch (id) {
    case "html":
      return { src: html };
    case "css":
      return { src: cssLogo };
    case "js":
      return { src: js };
    case "react":
      return { src: react };
    case "node":
      return { src: node };
    case "angular":
      return { src: angular };
    case "ts":
      return { src: ts };
    case "vue":
      return { src: vue };
  }
})<iImgStyled>`
  color: red;
  cursor: pointer;
  transition: all 400ms;
  width: 80px;
  ${({ isActive }: iImgStyled) =>
    !isActive &&
    css`
      filter: contrast(175%) brightness(0.3);
    `}
`;
