import React from 'react'

const Contact = ({ contactdata }) => {
  return (
    <div>
      {contactdata.parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercise}
        </p>
      ))}
    </div>
  );
};

export default Contact;
