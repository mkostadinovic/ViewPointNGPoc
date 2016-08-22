import React = require('react');
import ReactDOM = require('react-dom');

export default class App extends React.Component<any, any> {
    constructor()
    {
        super();
        
        this.state = {
            signedIn : false
        }

        this._onLoginComplete = this._onLoginComplete.bind(this);
        this._onLogoutComplete = this._onLogoutComplete.bind(this);
    1}

    render(){

        return (
            <div>
                {this.state.signedIn ? <ViewPointHub onLogoutComplete={this._onLogoutComplete} /> :
                <Login onLoginComplete={this._onLoginComplete} /> }
            </div>
        );
    }

    _onLoginComplete (result) {
        alert('app login handler');
        if (result()) {
            this.setState( { signedIn : true } );
        }
    }

    _onLogoutComplete () {
        alert('app logout handler');
        this.setState( { signedIn : false });
    }
}


export class ViewPointHub extends React.Component<any, any> {
  
    render() {

        var tiles = [];

        for (var i=0; i<10; i++) {
            tiles.push(<ViewPointTile key={i} name={i} />);
        } 

        return (
            <div>
                <h1>Welcome to ViewPoint</h1>
                <br />
                <button id="signOut" onClick={this.props.onLogoutComplete.bind(null, this._doLogout)}>Log out</button>
         
                {tiles}
            </div>
        );
    }

    
    _doLogout() {
        alert('logging out');
        return true;
    }
}


export class ViewPointTile extends React.Component<any, any> {
    render() {
        return (
                <div className='mediumTile'>
        <div className='tileDarkHeader'>

            <div className='identifierText identifierTextHub'>
                ViewPoint {this.props.name}
            </div>
        </div>
                </div>
            );
    }
}

export class Login extends React.Component<any, any> {
    render() {
        return (
            <div>
                <label htmlFor="username">username
                    <input type="text" id="username" />
                </label>
                <br />
                <label htmlFor="password">password
                    <input type="text" id="password" />
                </label>
                <br /> 
                <button id="signIn" onClick={this.props.onLoginComplete.bind(null, this._doLogin)}>SignIn</button>
            </div>   
 );
}

_doLogin() {
    alert('logging in');
     return true;
    }
}


ReactDOM.render(<App />, document.getElementById("rootElement"));