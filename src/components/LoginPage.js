import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFbLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startFbLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button 
                className="button"
                onClick={startGoogleLogin}
            >
                Login with Google
            </button>

            <button 
                className="button"
                onClick={startFbLogin}
            >
                Login with Facebook
            </button>
        </div>
        
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFbLogin: () => dispatch(startFbLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);