var AllItems = React.createClass({

	handleDelete(id) {
		console.log('delete item clicked')
		this.props.handleDelete(id);
	},


	onUpdate(item) {
		this.props.onUpdate(item);
	},
	
	render() {
		var items = this.props.items.map((item)=>{
			return (
					<div key={item.id} className="card">
						<Item item={item}
						 handleDelete={this.handleDelete.bind(this,item.id)} handleUpdate={this.onUpdate}/>
					</div>

				)
		});

		return (
				<div>	
					{items}
				</div>

			)
	}
});