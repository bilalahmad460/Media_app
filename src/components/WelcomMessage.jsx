export const WelcomMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>There are no Posts</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get Post from Server
      </button>
    </center>
  );
};
