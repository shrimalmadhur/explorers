import { FC, useContext, useEffect, useRef, useState } from 'react';
import axios from "axios";
import Blockchain from './Blockchain';

interface Props {
  data: any
}

const Blockchains: FC<Props> = ({ data }) => {
  const [chains, setChains] = useState([])
  useEffect(() => {
    axios.get('/api/blockchains')
      .then((response) => {
        setChains(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  return (
    <div className='p-5'>
      {!chains && <div>No data</div>}
      {chains && <div className='grid grid-cols-3 gap-3'>
        {chains.sort((a: any, b: any) => (a.name > b.name) ? 1: -1).map(function (entry: any, index: any) {
            return <div key={index}>
              <Blockchain data={entry}></Blockchain>
            </div>;
          })
        }
        </div>
      }

    </div>
  )
}

export default Blockchains