var Item = React.createClass({
	getInitialState() {
		return {
			editable:false
		}
	},
	handleEdit() {
		
		if(this.state.editable) {
			var name = this.refs.name.value;
			var description = this.refs.description.value;
			var id = this.props.item.id
			var item = {id:id,name:name,description:description};
			this.props.handleUpdate(item);

		}
		this.setState({editable: !this.state.editable});

	},
	render() {

		var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>; 
		var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;

			return (
				<div class="card-content">
					{name}
					{description}
					<button className="index_buttons waves-effect waves-light btn " onClick={this.props.handleDelete}>Delete</button>
					<button className="index_buttons waves-effect waves-light btn " onClick={this.handleEdit}>{this.state.editable?'Submit':'Edit'}</button>

				</div>

			)
	}
})