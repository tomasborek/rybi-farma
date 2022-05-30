import React, { ReactNode, useState } from "react";

const Dropdown = ({
  children,
  title,
  icon,
}: {
  icon?: string;
  children: ReactNode;
  title: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen((prev) => !prev)} className="relative">
      <div className="border-[1px] select-none border-textLighter text-textLight cursor-pointer rounded-lg w-[200px] px-4 text-center py-2 flex items-center justify-center">
        <i className={`${icon} mr-2`}></i>
        <p>{title}</p>
      </div>
      <div
        className={`absolute bg-white w-full overflow-hidden transition-all rounded-lg border-[1px]  border-textLighter ${
          open ? "h-[200px]" : "h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
