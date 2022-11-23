import React, { useState } from "react";
import File from "./File.jsx";
import "./Folder.css";

function Folder({ data }) {
  const [folderData, setFolderData] = useState(data);
  const [isFolderOpen, setIsFolderOpen] = useState(true);
  const [showFolderInput, setShowFolderInput] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);
  function createNewFile(event) {
    event.stopPropagation();
    setFolderData((prevState) => {
      return {
        ...prevState,
        items: [
          ...prevState.items,
          {
            id: Math.floor(Math.random() * 100000),
            name: "user.html",
            isFolder: false,
            items: [],
          },
        ],
      };
    });
    console.log("New File created");
  }
  function createNewFolder(event) {
    event.stopPropagation();
    setFolderData((prevState) => {
      return {
        ...prevState,
        items: [
          ...prevState.items,
          {
            id: Math.floor(Math.random() * 100000),
            name: "temp",
            isFolder: true,
            items: [],
          },
        ],
      };
    });
    console.log("New Folder Created");
  }
  return (
    <div className="folder">
      {folderData.isFolder ? (
        <>
          <div
            onClick={() => {
              setIsFolderOpen((prevState) => !prevState);
              setShowFolderInput(false);
              setShowFileInput(false);
            }}
            className={`folder__name ${isFolderOpen ? "" : "collapsed"}`}
          >
            <div>
              <i className={"fa-solid fa-chevron-down"}></i>
              <i className={"fa-solid fa-folder"}></i>
              {data.name}
            </div>
            <div className={"buttons-new"}>
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFolderInput(false);
                  setShowFileInput(true);
                }}
                className="fa-solid fa-file-circle-plus"
              ></i>
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFileInput(false);
                  setShowFolderInput(true);
                }}
                className="fa-solid fa-folder-plus"
              ></i>
            </div>
          </div>
          {showFolderInput && (
            <div className={"input-container"}>
              <i className={"fa-solid fa-folder"}></i>
              <input className={"folder__name"} placeholder={"Folder Name"} />
            </div>
          )}
          {showFileInput && (
            <div className={"input-container"}>
              <i className={"fa-solid fa-file"}></i>
              <input className={"file"} placeholder={"File Name"} />
            </div>
          )}
          {isFolderOpen && (
            <ul>
              {folderData.items
                .sort((a, b) => b.isFolder - a.isFolder)
                .map((item) => (
                  <li key={item.id} className={"folder__list"}>
                    <Folder data={item} />
                  </li>
                ))}
            </ul>
          )}
        </>
      ) : (
        <File name={folderData.name} />
      )}
    </div>
  );
}

export default Folder;
