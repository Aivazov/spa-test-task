import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export default function Loader() {
  return (
    <p style={{ fontSize: 24 }}>
      <InfinitySpin
        height={200}
        width={200}
        radius={10}
        color="#363636"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </p>
  );
}
