import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Perpetua', sans-serif;
}
*:focus {
  outline: 0;
}
html, body, #root {
  height:100%;
}
body{
  -webkit-font-smoothing: antialiased !important;
  transition: background-color 300ms;
  background-color: #fff0f5;
}
body, input, button {
  font-size: 14px;
  font-family: 'Perpetua', Helvetica, sans-serif;
}
button {
  cursor: pointer;
  border: 0;
}
svg {
  cursor: pointer
}
ul {
  list-style:none;
}
li {
  list-style-type: none;
  font-family: 'Perpetua', Helvetica, Arial;
  font-size: 30px;
}
a {
  text-decoration:none;
}
@keyframes loadAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity:1
  }
}
`;