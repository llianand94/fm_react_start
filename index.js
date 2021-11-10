// React
// ReactDOM
//  статический компонент


class Heading extends React.Component{
  render(){
    // console.log(this); 
    const {titleForHeading, children} = this.props;
    return React.createElement('h1',{className:'heading', title:titleForHeading},...children);
  }
}


const container  = document.getElementById('root');
const reactElement2 = React.createElement(Heading, {titleForHeading:'qqweryt'});
const reactElement = React.createElement(Heading, {titleForHeading:'title123'}, 'Elon Masl', reactElement2);



ReactDOM.render(reactElement, container);