// Import React (Mandatory Step).
import React from 'react';
// Import Output Screen Row.
import OutputScreenRow from './outputScreenRow.js';

// Functional Component.
// Use to hold two Screen Rows.
export default function OutputScreen() {
  return (
    <div className="screen">
      <OutputScreenRow />
      <OutputScreenRow />
    </div>
  );
}
