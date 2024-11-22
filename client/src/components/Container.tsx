import React from 'react'

interface IContainer{
    children:React.ReactNode
}


const Container:React.FC<IContainer> = ({ children }) => {
  return <div className='	'>{children}</div>;
}

export default Container
