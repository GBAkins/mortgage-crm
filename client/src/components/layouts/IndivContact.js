import React from "react";

// This file exports both the List and ListItem components

export function IndivContact({ children }) {
  return (
    <div>
      <ul className="collection with-header">{children}
      </ul>
    </div>
  );
}

export function IndivContactItem({ children }) {
  return <li className="collection-header">{children}</li>;
}
