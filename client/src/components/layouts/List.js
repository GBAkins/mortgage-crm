import React from "react";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div>
      <ul className="collection with-header">{children}
      </ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="collection-item"><div>{children}<a href="#!" className="secondary-content"><i className="material-icons">mail</i></a></div></li>;
}
