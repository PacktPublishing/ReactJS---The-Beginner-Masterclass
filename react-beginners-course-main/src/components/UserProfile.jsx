/** @format */

//Challenge Solution!
function UserProfile({ name, email, bio }) {
  return (
    <div className="user-profile">
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}
export default UserProfile;
