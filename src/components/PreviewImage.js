import React from 'react';

export const PreviewImage = ({file,width,height}) => {

  const [preview, setPreview] = React.useState(null);

  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = () => {

    setPreview(reader.result);

  };

  return (

    <div className='text-center'>

      <img src={preview} alt="Preview" width={width} height={height} />

    </div>

  )

}
