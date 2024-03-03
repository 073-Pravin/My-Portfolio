import React from "react";

const CertificateCard = ({ title, organization,issuedDate,url }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.view = "";

    link.href = url;
    link.target = "_blank";
    link.click();
  };

  return (
    <div className="w-full h-auto xl:py-10 flex group">
      <div className="w-10 h-[6px] mt-16 relative bgOpacity">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-6 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p >
              <span>Issued By: </span>
              <b>{organization}</b>
            </p>
            <p className="text-sm mt-2 text-gray-400">
                <span>Date of issue: </span>
                <b>{issuedDate}</b>
            </p>
          </div>
          <div>
            <button
              className=" bg-transparent border rounded-md p-2 text-[#ff014f] border-designColor hover:text-[#fff] hover:border-white hover:shadow-white-700"
              onClick={handleDownload}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
