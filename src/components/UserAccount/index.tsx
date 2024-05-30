import React, { useState } from "react";

const UserAccount = () => {
  const [isLogin, setLogin] = useState<boolean>(false);

  const handleOnClick = () => {
    setLogin(!isLogin);
  };
  return (
    <div>
      <button onClick={handleOnClick}>{isLogin ? "Logout" : "Login"}</button>
    </div>
  );
};

export default UserAccount;
