import React from "react";

//Data
import AllSettingsData from "./AllSettingsData";

//Css
import "../../css/AllSettings/AllSettings.css";

const AllSettings = () => {
  return (
    <div className="allSettings my-5">
      <div className="container">
        <div className="row">
          {AllSettingsData &&
            AllSettingsData.map((data) => (
              <div className="col-lg-3 col-md-6 col-sm-12">
                <a href="#">
                  <div className="settings p-2 my-4" key={data.id}>
                    <img
                      src={data.img}
                      width={40}
                      height={40}
                      alt="settingimg"
                    />
                    <span>{data.title}</span>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllSettings;
