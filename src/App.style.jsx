import styled, { createGlobalStyle, css } from "styled-components"
import { Link } from "react-router-dom"
import { DebounceInput } from "react-debounce-input"

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  .page {
    display: flex;
    flex: 1; 
    flex-direction: column;
  }
  
  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }
  
  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }
  
  .page-exit {
    opacity: 1;
    transform: scale(1);
  }
  
  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Nav = styled.div`
  display: flex;
  flex: 1;
  background-color: #db7093;
  color: #fff;
  padding: 10px;
  align-items: center;

  ${props =>
    props.transparent &&
    css`
      background: transparent;
      color: black;
    `}
`

export const H1 = styled.h1`
  display: flex;
  flex: 1;
  font-size: 24px;

  ${props =>
    props.link &&
    css`
      a {
        color: white;
        text-decoration: none;
      }
    `}
`
export const Button = styled(Link)`
  display: flex;
  min-width: 50px;
  height: 30px;
  padding: 5px;
  border: 2px solid #db7093;
  color: #db7093;
  background: white;
  font-size: 14px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  text-transform: capitalize;
  margin: 0px 10px;
  &:hover {
    background: #db7093;
    color: white;
    border-color: white;
  }

  ${props =>
    props.borderonhover &&
    css`
      border-color: white;
    `}
`
export const Section = styled.section`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 100%;
`

export const Template = styled.div`
  display: flex;
  width: 100px;
  border: 2px solid lightgrey;
  border-radius: 5px;
  margin: 10px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  min-height: 100px;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background: #db7093;
    color: white;
  }
`

export const P = styled.p`
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 16px;
  word-break: break-all;
`

export const Input = styled(DebounceInput)`
  width: 200px;
  height: 30px;
  font-size: 18px;
  border: 2px solid #db7093;
  padding: 5px 10px;
`
