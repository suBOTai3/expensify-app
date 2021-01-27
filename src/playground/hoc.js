import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

// HOC 1
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info - pls don't share!</p>
            <WrappedComponent {...props}  />
        </div>
    )
}

// HOC 2
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <p>You are authenticated!</p>}
            <WrappedComponent {...props}  />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="Thar she blows" />, document.getElementById('app'));