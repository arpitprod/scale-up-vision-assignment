import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Table, Button } from 'reactstrap';

class RegisterFirst extends React.Component {

	render() {
		const { usersList } = this.props;
		return (
			<div>
				<Row>
					<Col sm={{ size: 'auto', offset: 1 }}>
						<Button color="link"
							onClick={() => this.props.history.push('/register/1')}
						>
							Register
						</Button>
					</Col>
					<Col sm={{ size: 'auto', offset: 1 }}>
						<Button color="link"
							onClick={() => this.props.history.push('/dashboard')}
						>
							Dashboard
						</Button>
					</Col>
				</Row>
				<Row>
					<Col sm="10">
						<Card body>
							<Table bordered>
								<thead>
									<tr>
										<th>#</th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Username</th>
										<th>Email</th>
									</tr>
								</thead>
								<tbody>
									{usersList.length > 0 && usersList.map((obj, i) => (
										<tr key={i}>
											<th scope="row">{i+1}</th>
											<td>{obj.firstName}</td>
											<td>{obj.lastName}</td>
											<td>{obj.username}</td>
											<td>{obj.email}</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	usersList: state.app.usersList
});

export default connect(mapStateToProps)(RegisterFirst);
