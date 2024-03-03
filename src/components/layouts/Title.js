import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14 xs:mb-5">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide xs:text-xs">
       {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title
