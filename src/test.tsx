import * as React from 'react'

export interface TestProps {
  unionProp?: 'option 1' | 'option 2' | 'option 3' | 'option 4'
  isActive?: boolean
  name: string
  description?: string
}


const Test: React.FunctionComponent<TestProps> = ({ unionProp, isActive, name, description }) => {
  return (<><div>{`isProp: ${unionProp}`}</div>
  <div>{`isProp: ${isActive}`}</div>
  <div>{`isProp: ${name}`}</div>
  <div>{`isProp: ${description}`}</div></>)
}

export { Test }