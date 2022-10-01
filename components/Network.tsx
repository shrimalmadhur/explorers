import { FC, useContext, useEffect, useRef, useState } from 'react';

interface Props {
  data: any
}

const Network: FC<Props> = ({ data }) => {
  return (
    <div>
      <div className='font-mono'>{data.name}</div>
      <div>
        <a className='text-blue-600 visited:text-purple-600 underline flex flex-row gap-1' href={data.block_explorer_url} target='new'>
          <span className='font-mono'>Explorer</span> 
          <div className='pt-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Network