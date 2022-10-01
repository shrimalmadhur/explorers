import { FC, useContext, useEffect, useRef, useState } from 'react';

interface Props {
  data: any
}

const Network: FC<Props> = ({ data }) => {
  return (
    <div>
      <div>{data.name}</div>
    </div>
  )
}

export default Network