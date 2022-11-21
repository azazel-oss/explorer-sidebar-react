import React, { useState } from "react";
import File from "./File.jsx";

function Folder({ data }) {
  const [isFolderOpen, setIsFolderOpen] = useState(true);
  return (
    <div className="folder">
      {data.isFolder ? (
        <>
          <div onClick={() => setIsFolderOpen((prevState) => !prevState)}>
            {data.name} ->
          </div>
          {isFolderOpen && (
            <ul>
              {data.items.map((item) => (
                <li className={"folder__list "}>
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
