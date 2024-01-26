import React, { useEffect, useState } from "react";
import "../Styles/uploadcsv.css";

const DataCard = ({ data, handleAddTags, handleremoveTags }) => {
  const [selectedTag, setSelectedTag] = useState("");
  const handleChange = (e) => {
    setSelectedTag(e.target.value);
    handleAddTags(e.target.value, data.id);
    setSelectedTag("");
  };
  return (
    <div className="grid-view aa">
      <>
        <p>{data.id}</p>
        <a href={data.link}>{data.link}</a>
        <p>{data.prefix}</p>
        <select
          className="slectInput"
          id="tagDropdown"
          value={selectedTag}
          onChange={handleChange}
        >
          <option value="" disabled>
            Add Tag
          </option>
          {data.addtags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <div className="tag-div">
          {data.tags.map((tag, key) => (
            <p
              className="tag "
              key={key}
              onClick={() => {
                handleremoveTags(tag, data.id);
              }}
            >
              {tag}
              <span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L4 4M4 4L1 7M4 4L7 7M4 4L7 1"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </p>
          ))}
        </div>
      </>
    </div>
  );
};

const Uploads = ({ data }) => {
  const [tabledata, setTabledata] = useState(null);
  const handleAddTags = (data, elementKey) => {
    setTabledata((prevState) => {
      const updatedState = [...prevState];
      const elementIndex = updatedState.findIndex(
        (item) => item.id === elementKey
      );
      if (elementIndex !== -1) {
        updatedState[elementIndex] = {
          ...updatedState[elementIndex],
          tags: [...updatedState[elementIndex].tags, data],
        };
      }
      return updatedState;
    });
  };

  const handleremoveTags = (data, elementKey) => {
    setTabledata((prevState) => {
      const updatedState = [...prevState];
      const elementIndex = updatedState.findIndex(
        (item) => item.id === elementKey
      );
      if (elementIndex !== -1) {
        const updatedTags = updatedState[elementIndex].tags.filter(
          (tag) => tag !== data
        );

        updatedState[elementIndex] = {
          ...updatedState[elementIndex],
          tags: updatedTags,
        };
      }
      return updatedState;
    });
  };

  useEffect(() => {
    setTabledata(data);
  }, [data]);
  return (
    <>
      {tabledata && (
        <>
          <h3 className="upload-head">Upload</h3>
          <div className="table-body">
            <div className="table">
              <div className="grid-view">
                <p>Sl No</p>
                <p>links</p>
                <p>prefix</p>
                <p>Add Tags</p>
                <p>Selected Tags</p>
              </div>
              {tabledata.map((value, key) => {
                return (
                  <DataCard
                    key={key}
                    data={value}
                    handleAddTags={handleAddTags}
                    handleremoveTags={handleremoveTags}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Uploads;
