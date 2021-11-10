// React
// ReactDOM


class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter:0}
  }
  render(){
    const {counter} = this.state;
    
    return React.createElement(React.Fragment,{}, 
      React.createElement('h1',{}, counter),
      React.createElement('button',{}, '+'),
      React.createElement('button',{}, '-'),
    )
  }
}

const reactElement = React.createElement(Counter);


ReactDOM.render(reactElement, document.getElementById('root'));