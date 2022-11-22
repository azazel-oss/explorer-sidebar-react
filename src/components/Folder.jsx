import React, { useState } from "react";
import File from "./File.jsx";
import "./Folder.css";

function Folder({ data }) {
  const [isFolderOpen, setIsFolderOpen] = useState(true);
  return (
    <div className="folder">
      {data.isFolder ? (
        <>
          <div
            className={`folder__name ${isFolderOpen ? "" : "collapsed"}`}
            onClick={() => setIsFolderOpen((prevState) => !prevState)}
          >
            <i className={"fa-solid fa-chevron-down"}></i>
            {data.name}
          </div>
          {isFolderOpen && (
            <ul>
              {data.items.map((item) => (
                <li key={item.id} className={"folder__list"}>
                  <Folder data={item} />
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <File name={data.name} />
      )}
    </div>
  );
}

export default Folder;
