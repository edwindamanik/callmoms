import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <a href="/">Go TO Homepage</a>
      </div>
    </div>
  );
};

export default NotFound;
