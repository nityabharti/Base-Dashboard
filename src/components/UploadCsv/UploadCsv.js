import "./UploadCsv.css";

import React from "react";

const UploadCsv = () => {
  return (
    <div className="csv-main">
      <div className="csv-container">
        <div>
          <label htmlFor="fileInput" className="file-label">
            Drop Excel sheet here or browse to upload Excel file
            <input type="file" id="fileInput" className="file-input" />
          </label>
        </div>
        <button className="upload-button">Upload</button>
      </div>
    </div>
  );
};

export default UploadCsv;
