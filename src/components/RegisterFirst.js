import React from 'react';
import { Row, Col, Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class RegisterFirst extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: ''
		}
	}

	handleChangeForm = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	goToNextPage = (e) => {
		e.preventDefault();
		const { username, email, password } = this.state;
		console.log({ username, email, password });
		this.props.history.push({
			pathname: '/register/2',
			user: { username, email, password }
		});
	}

	render() {
		const { username, email, password } = this.state;
		return (
			<Row>
				<Col sm="6">
					<Card body>
						<Form
							onSubmit={this.goToNextPage}
						>
							<FormGroup>
								<Label for="username">Username</Label>
								<Input
									type="username" name="username" id="username"
									value={username}
									onChange={this.handleChangeForm}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="email">Email</Label>
								<Input
									type="email" name="email" id="email"
									value={email}
									onChange={this.handleChangeForm}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="password">Password</Label>
								<Input
									type="password" name="password" id="password"
									value={password}
									onChange={this.handleChangeForm}
								/>
							</FormGroup>
							<Button>Next</Button>
						</Form>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default RegisterFirst;
