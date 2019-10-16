import React, { Fragment } from "react";
import Form from "./Form";
import Messages from "./Messages";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Messages />
    </Fragment>
  );
}
