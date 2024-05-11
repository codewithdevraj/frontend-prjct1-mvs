// StudentDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

function StudentDetail() {
  // Access the id parameter from the URL
  let { id } = useParams();

  return (
    <div>
      <h2>Student Detail</h2>
      <p>Student ID: {id}</p>
      {/* Fetch student data using the ID */}
    </div>
  );
}

export default StudentDetail;
