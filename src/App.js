import DashbordLayout from "./Layout/DashbordLayout";
import React from "react";
import Signin from "./components/SigninPage/Signin";
import UploadCSV from "./pages/UploadCSV";

const App = () => {
  return (
    <DashbordLayout>
      <UploadCSV />
    </DashbordLayout>
  );
};

export default App;
