import React, { useState } from "react";

const CountryCode = () => {
  const [formdata, setFormdata] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Textarea: "",
    isFriendly: true,
    employment: "",
    favColour: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormdata((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("FormData", formdata);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="FirstName"
          onChange={handleChange}
          value={formdata.FirstName}
        />
        <input
          type="text"
          name="LastName"
          onChange={handleChange}
          value={formdata.LastName}
        />
        <input
          type="email"
          name="Email"
          onChange={handleChange}
          value={formdata.Email}
        />
        <textarea
          type="textarea"
          name="Textarea"
          onChange={handleChange}
          value={formdata.Textarea}
        />
        <input
          id="isFriendly"
          type="checkbox"
          name="isFriendly"
          onChange={handleChange}
          checked={formdata.isFriendly}
        />
        <label htmlFor="isFriendly">Are you Friendly?</label>
        <br />
        <fieldset>
          <legend>Current employment status</legend>

          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formdata.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={formdata.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={formdata.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor="full-time">Full-time</label>
          <br />
        </fieldset>
        <label htmlFor="favColour"></label>
        <select
          id="favColour"
          onChange={handleChange}
          value={formdata.favColour}
          name="favColour"
        >
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="yellow">Yellow</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default CountryCode;

//
