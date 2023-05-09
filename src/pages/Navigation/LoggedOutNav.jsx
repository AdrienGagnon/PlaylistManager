import authentication from '../../authentication';

const LoggedOutNav = () => {
    return (
        <div>
            homepage <button onClick={authentication}>Log In</button>
        </div>
    );
};

export default LoggedOutNav;
