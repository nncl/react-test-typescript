import React, { Component } from 'react'
import User from '../../models/User';

export default class CardUser extends Component<{}, { user: User }> {
    user: User;

    constructor(props: any) {
        super(props);

        this.user = new User();
        this.state = {user: this.user};
    }

    componentDidMount() {
        this.doSomethingElse();
    }

    doSomething(user: User) {
        this.setState({user: user});
    }

    doSomethingElse() {
        this.user.name = 'Cauê Almeida';
        this.user.nickname = 'Cauê';
        this.user.age = 24;
        this.doSomething(this.user);
    }

    render() {
        return (
            <h1>Hello {this.state.user.name}</h1>
        )
    }
}
