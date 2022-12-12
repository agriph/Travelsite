	class MyForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			apppVersion: ''
		}
	}
	
	render(){
		return(
		<div>
		<h2>Hello!</h2>
		<button>Downlad</button>
		</div>
		)
	}