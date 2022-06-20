import PropTypes from "prop-types";
import React, { useState } from "react";
import context from "./context";

function Provider({ children }) {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
  const [task, setTask] = useState("");
  const [id, setId] = useState();

  const contextValue = {
    setShow,
    show,
    status,
    setStatus,
    task,
    setTask,
    id,
    setId,
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
