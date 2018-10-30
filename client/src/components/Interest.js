import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { Consumer } from './context'

export default withStyles(theme => ({
	button: {
		margin: theme.spacing.unit,
	},
}))(class extends Component {
	state = {
		interestFormComplete: false,
	}
	onClick = () => {
		this.setState({ interestFormComplete: true })
	}
	render() {
		const { classes } = this.props
		const { interestFormComplete } = this.state
		if (interestFormComplete) return <Redirect to={'/'}/>
	
		return (
			<div>
				<Consumer>
					{({ interestFormComplete }) => (
						<Button 
							variant="contained" 
							className={classes.button}
							onClick={e => this.onClick()}
						>
							Begin
						</Button>
					)}
				</Consumer>
			</div>
		)
	}
})
