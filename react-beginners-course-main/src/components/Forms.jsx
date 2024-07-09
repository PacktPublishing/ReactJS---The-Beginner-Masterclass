/** @format */

import { useState } from 'react';

function NameForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    profession: '',
  });
  const [profiles, setProfiles] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.name && formData.profession && formData.age) {
      setProfiles([...profiles, formData]);
      setFormData({ name: '', age: '', profession: '' });
    } else {
      alert('Please fill in all fields');
    }
  }
  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group mb-3">
          <input
            className="form-control"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
        </div>

        <div className="form-group mb-3">
          <input
            className="form-control"
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            placeholder="Enter profession"
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>

      {profiles.map((profile, index) => (
        <div key={index} className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{profile.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Age: {profile.age}
            </h6>
            <p className="card-text">Profession: {profile.profession}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default NameForm;
