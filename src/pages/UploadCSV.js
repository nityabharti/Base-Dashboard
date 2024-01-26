import React, { useState } from "react";
import "../Styles/uploadcsv.css";
import Papa from "papaparse";
import Uploads from "./Uploads";

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const convertToNewFormat = (data) => {
    return data.map((entry) => {
      return {
        id: parseInt(entry[0]),
        link: entry[1],
        prefix: entry[2],
        addtags: entry[3].split(", "),
        tags: [],
      };
    });
  };

  const HandleSubmit = () => {
    setLoading((prev) => !prev);
    if (file) {
      Papa.parse(file[0], {
        complete: function (results) {
          const data = convertToNewFormat(results.data.slice(1));
          setData(data);

          setLoading((prev) => !prev);
        },
      });
    } else {
      setLoading((prev) => !prev);
    }
  };
  return (
    <div>
      <h3 className="main-heading">Upload CSV</h3>

      <div className="csv-box">
        <div className="upload-box">
          <div className="upload-section">
            <img
              height={40}
              src="https://img.icons8.com/?size=96&id=UECmBSgBOvPT&format=png"
              alt="exel"
            />
            <div className="upload-text">
              {file === null ? (
                <p onClick={() => document.getElementById("fileInput").click()}>
                  Drop your excel sheet here or{" "}
                  <span className="add-btn">browse</span>
                </p>
              ) : (
                <p>
                  <span className="add-btn">{file[0].name}</span>
                </p>
              )}
              {file !== null && (
                <p
                  className="remove-btn"
                  onClick={() => {
                    setFile(null);
                  }}
                >
                  Remove
                </p>
              )}

              <input
                type="file"
                id="fileInput"
                accept=".csv,.xlsx,.xls"
                style={{ display: "none" }}
                onChange={(e) => {
                  const files = e.target.files;
                  setFile(files);
                }}
              />
            </div>
          </div>
          <button className="upload-button" onClick={HandleSubmit}>
            {!loading ? (
              <>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>upload</p>
              </>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width="17"
                  height="17"
                  rx="8.5"
                  stroke="url(#paint0_angular_22_3041)"
                  stroke-width="2"
                />
                <defs>
                  <radialGradient
                    id="paint0_angular_22_3041"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(10 10) rotate(90) scale(9.5)"
                  >
                    <stop offset="0.482539" stop-color="white" />
                    <stop
                      offset="0.482639"
                      stop-color="white"
                      stop-opacity="0"
                    />
                    <stop
                      offset="0.612852"
                      stop-color="white"
                      stop-opacity="0"
                    />
                    <stop offset="0.612952" stop-color="white" />
                  </radialGradient>
                </defs>
              </svg>
            )}
          </button>
        </div>
      </div>
      <Uploads data={data} />
    </div>
  );
};

export default UploadCSV;
