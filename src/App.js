import React from 'react'
import { render } from 'react-dom'
/* Importing firebase */
// eslint-disable-next-line no-unused-vars
import firebase from '../utils/firebase'

const App = () => {
	return (
		<React.StrictMode>
			<div className="container">
				<header className="header">
					<h1>Hello World! 👋</h1>
					<p>React Firebase starter template</p>
				</header>
			</div>
		</React.StrictMode>
	)
}

render(<App />, document.getElementById('root'))
