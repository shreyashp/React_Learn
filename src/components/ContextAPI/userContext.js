import React from "react";

const UserContext = React.createContext("Computer");
//'Computer' is the default context value, if nothing is declared in the Provider, this will be passed as value.

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext; //Exporting this to directly access context value without using Consumer in implementing class
