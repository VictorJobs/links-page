import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 body, html {
  margin: 0;
  padding: 0;
 }

 * {
  transition: 0.3 ease-in;
  box-sizing: border-box;
 }

`


const App = () => {
	return (
		<>
			<GlobalStyle />
			<div>
        Novo projeto pagina de links
			</div>
		</>
	)
}

export default App
