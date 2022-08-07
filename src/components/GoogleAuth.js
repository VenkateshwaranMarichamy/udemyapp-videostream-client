import React from "react";

class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1074004427974-obrfd6iu9oantj3q9ernrojj0a9rg625.apps.googleusercontent.com',
                //clientId:'797401886567-9cumct9mrt33v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
                scope: 'email',
                plugin_name: 'streamy'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    };

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () =>{
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            //return <div>I don't know if you are signed in</div>;
            return null;
        } else if (this.state.isSignedIn) {
            //return <div>I am signed in!</div>;
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            //return <div>I am not signed in</div>;
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    };

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    };
};

export default GoogleAuth;