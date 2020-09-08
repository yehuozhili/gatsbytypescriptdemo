import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>+++</button>
      </div>
    )
  }
}

export default () => (
  <Wrapper>
    <App></App>
  </Wrapper>
)
