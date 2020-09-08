import React, { PropsWithChildren } from "react"
function App(props: PropsWithChildren<{}>) {
  console.log(props)
  return (
    <div>
      layout
      {props.children}
    </div>
  )
}

export default (props: PropsWithChildren<{}>) => <App {...props}></App>
