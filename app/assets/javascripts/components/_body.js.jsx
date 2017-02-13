var Body = React.createClass({
	getInitialState() {
		return {
			items: []
		}
	},
	componentDidMount() {
		$.getJSON('/api/v1/items.json',(response)=>{this.setState({items:response})});
	},

	handleSubmit(item) {
		console.log(item);

		var newState = this.state.items.concat(item);
		this.setState({items: newState});
	},

	handleDelete(id) {
		console.log('in handle delete');
		$.ajax({
			url: `/api/v1/items/${id}`,
			type: 'DELETE',
			success: () => {
				console.log('removed the item')
				this.removeItemClient(id);
			}
		})
	},

	removeItemClient(id) {
		var newItems = this.state.items.filter((item)=>{
			return item.id != id;
		});

		this.setState({items:newItems});
	},

	handleUpdate(item) {
		$.ajax({
			url: `/api/v1/items/${item.id}`,
			type: 'PUT',
			data: {item:item},
			success:()=> {
				console.log('you did it');
				this.updateItems(item);
			}

		})
	},

	updateItems(item) {
		// var items = this.state.items.filter((i)=>{return i.id != item.id});
		// items.push(item);
		var items = this.state.items;
		items.forEach(function(i){
			if(i.id == item.id) {
				i.name = item.name;
				i.description = item.description;
			}
			return i;
		})
	
		this.setState({items:items});


	},

	render() {
		return (
				<div>
					<NewItems handleSubmit={this.handleSubmit}/>
					<AllItems onUpdate={this.handleUpdate} handleDelete= {this.handleDelete} items={this.state.items}/>

				</div>

			)
	}
})