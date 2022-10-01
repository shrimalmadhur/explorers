import { FC, useContext, useEffect, useRef, useState } from 'react';
import Network from './Network';

interface Props {
  data: any
}

const Blockchain: FC<Props> = ({ data }) => {
  return (
    <div className='border-0 border-black-500 rounded min-h-full h-60 p-2 bg-orange-300/40'>
      <div className='text-2xl font-mono'>{data.name}</div>
      <div className='grid grid-cols-1'>{data.networks.map(function (entry: any, index: any) {
        return <div key={index}>
          <Network data={entry}></Network>
        </div>;
      })
      }
      </div>
    </div>
  )
}

export default Blockchain