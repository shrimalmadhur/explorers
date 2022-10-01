import { FC, useContext, useEffect, useRef, useState } from 'react';
import Network from './Network';

interface Props {
  data: any
}

const Blockchain: FC<Props> = ({ data }) => {
  return (
    <div className='border-2 border-sky-500 rounded'>
      <div className='text-2xl'>{data.name}</div>
      <div className='grid grid-cols-1'>{data.networks.map(function (entry: any, index) {
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