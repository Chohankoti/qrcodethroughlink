import React from "react";
import familyData from "./familyData";
import QRCode from "qrcode.react";
import "./App.css";

const App = () => { 

  return (
    <>
    <h1>QR Code with link</h1>
    <table className="family-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Relationship</th>
            <th>Gender</th>
            <th>QR Code</th>
          </tr>
        </thead>
        <tbody>
          {familyData.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.age}</td>
              <td>{member.relationship}</td>
              <td>{member.gender}</td>
              <td>
              <QRCode value={`http://localhost:3001/details/${member.id}`} style={{ marginRight: 50 }} />
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </>      
  );
};

export default App;
