import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Dashboard extends React.Component {
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
							onClick={() => this.props.history.push('/userlist')}
						>
							User Lists
						</Button>
					</Col>
				</Row>
				<Row>
					<Col sm={{ size: 'auto', offset: 4 }}>
						<Card body>
							<CardBody>
								<CardTitle>Total Users</CardTitle>
								<CardSubtitle>All Registered Users</CardSubtitle>
								<CardText>
									{usersList.length}
								</CardText>
							</CardBody>
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

export default connect(mapStateToProps)(Dashboard);
