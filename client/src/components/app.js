import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Layout from './Layout'
import Home from './home'
import { Stage1, Stage2 } from './Stages'

export default class extends Component {
	state = {
		interests: [],
		user: '',
	}
	setInterests = (formState) => {
		let interests = []
		Object.entries(formState.interests).forEach(([interest, selected]) => {
			if (selected){
				interests.push(interest)
			}
		})
		let { user } = formState
		this.setState({ interests,user }, () => console.log(this.state))
	}
	render() {
		return (
			<BrowserRouter>
				<Provider 
					value={{ 
						state: this.state, 
						setInterests: this.setInterests 
					}}
				>
					<Layout>
						<Switch>
							<Route exact component={Home} path="/" />
							<Route component={Stage1} path="/stage1" />
							<Route component={Stage2} path="/stage2" />
						</Switch>
					</Layout>
				</Provider>
			</BrowserRouter>
		)
	}
}

