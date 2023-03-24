import React from "react";

const SectionTitle = ({ heading, subHeading, textLeft }) => {
  return (
    <div className={`${textLeft ? "text-left" : "text-center"} mb-8`}>
      <h2 className="text-[30px] text-heading font-extrabold mb-2">
        {heading}
      </h2>
      <p className="text-sm text-body font-light">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
