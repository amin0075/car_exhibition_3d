import React from "react";

import ClientComponent from "./components/ClientComponent";
import ServerComponent from "./components/ServerComponent";

const ContactUs = () => {
  return (
    <div>
      ContactUs
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
};

export default ContactUs;
