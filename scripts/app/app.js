define(["require", "exports", 'react', 'react-dom'], function (require, exports, React, ReactDOM) {
    "use strict";
    class App extends React.Component {
        constructor() {
            super();
            this.state = {
                signedIn: false
            };
            this._onLoginComplete = this._onLoginComplete.bind(this);
            this._onLogoutComplete = this._onLogoutComplete.bind(this);
            1;
        }
        render() {
            return (React.createElement("div", null, this.state.signedIn ? React.createElement(ViewPointHub, {onLogoutComplete: this._onLogoutComplete}) :
                React.createElement(Login, {onLoginComplete: this._onLoginComplete})));
        }
        _onLoginComplete(result) {
            alert('app login handler');
            if (result()) {
                this.setState({ signedIn: true });
            }
        }
        _onLogoutComplete() {
            alert('app logout handler');
            this.setState({ signedIn: false });
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = App;
    class ViewPointHub extends React.Component {
        render() {
            var tiles = [];
            for (var i = 0; i < 10; i++) {
                tiles.push(React.createElement(ViewPointTile, {key: i, name: i}));
            }
            return (React.createElement("div", null, React.createElement("h1", null, "Welcome to ViewPoint"), React.createElement("br", null), React.createElement("button", {id: "signOut", onClick: this.props.onLogoutComplete.bind(null, this._doLogout)}, "Log out"), tiles));
        }
        _doLogout() {
            alert('logging out');
            return true;
        }
    }
    exports.ViewPointHub = ViewPointHub;
    class ViewPointTile extends React.Component {
        render() {
            return (React.createElement("div", {className: 'mediumTile'}, React.createElement("div", {className: 'tileDarkHeader'}, React.createElement("div", {className: 'identifierText identifierTextHub'}, "ViewPoint ", this.props.name))));
        }
    }
    exports.ViewPointTile = ViewPointTile;
    class Login extends React.Component {
        render() {
            return (React.createElement("div", null, React.createElement("label", {htmlFor: "username"}, "username", React.createElement("input", {type: "text", id: "username"})), React.createElement("br", null), React.createElement("label", {htmlFor: "password"}, "password", React.createElement("input", {type: "text", id: "password"})), React.createElement("br", null), React.createElement("button", {id: "signIn", onClick: this.props.onLoginComplete.bind(null, this._doLogin)}, "SignIn")));
        }
        _doLogin() {
            alert('logging in');
            return true;
        }
    }
    exports.Login = Login;
    ReactDOM.render(React.createElement(App, null), document.getElementById("rootElement"));
});
//# sourceMappingURL=app.js.map