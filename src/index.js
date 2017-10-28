import Inferno from 'inferno';
import Component from 'inferno-component';

function HelloWorld(props) {
	return(<div>Hello World!</div>)
}

Inferno.render(<HelloWorld />, document.getElementById('app'));