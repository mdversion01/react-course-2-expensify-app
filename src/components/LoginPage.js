import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFbLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startFbLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <div>Login with:</div>
            <div className="icons">
                <button 
                    className="button button--icon"
                    onClick={startGoogleLogin}
                >
                    <img className="icon-buttons" src="/images/google-icon.png" title="Login with Google" />
                </button>

                <button 
                    className="button button--icon"
                    onClick={startFbLogin}
                >
                    <img className="icon-buttons" src="/images/fb-icon.png" title="Login with Facebook" />
                </button>
            </div>
        </div>
        
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFbLogin: () => dispatch(startFbLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);