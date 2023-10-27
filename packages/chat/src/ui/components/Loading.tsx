import * as React from 'react'

const Loading = ({ message = 'Loading...', children }: React.PropsWithChildren<any>) => (
  <h1>
    {message}...
    {children}
  </h1>
)
export default Loading
