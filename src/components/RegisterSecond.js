// maria.j@scale-up.vision

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { usersListAction } from '../appReducer';

class RegisterSecond extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: ''
		}
	}

	handleChangeForm = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addUser = (e) => {
		e.preventDefault();
		const { username, email, password } = this.props.location.user;
		const { firstName, lastName } = this.state;
		console.log({ username, email, password, firstName, lastName });
		this.props.usersListAction({ username, email, password, firstName, lastName });
		this.props.history.push('/userlist');
	}

	render() {
		console.log(this.props);
		const { username, email } = this.props.location.user;
		const { firstName, lastName } = this.state;
		return (
			<Row>
				<Col sm="6">
					<Card body>
						<Form
							onSubmit={this.addUser}
						>
							<FormGroup>
								<Label for="username">Username</Label>
								<Input
									type="username" name="username" id="username" readOnly
									value={username}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="email">Email</Label>
								<Input
									type="email" name="email" id="email" readOnly
									value={email}
								/>
							</FormGroup>
							{/* <FormGroup>
								<Label for="password">Password</Label>
								<Input
									type="password" name="password" id="password" readOnly
									value={password}
								/>
							</FormGroup> */}
							<FormGroup>
								<Label for="firstName">First Name</Label>
								<Input
									type="firstName" name="firstName" id="firstName"
									value={firstName}
									onChange={this.handleChangeForm}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="lastName">Last Name</Label>
								<Input
									type="lastName" name="lastName" id="lastName"
									value={lastName}
									onChange={this.handleChangeForm}
								/>
							</FormGroup>
							<Button>Submit</Button>
						</Form>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default connect(null, { usersListAction })(RegisterSecond);
