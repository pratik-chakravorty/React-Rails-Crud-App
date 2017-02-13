var NewItems = React.createClass({
	handleSubmit(e) {
		e.preventDefault();
		var name = this.refs.name.value;
		var description = this.refs.description.value;

		$.ajax({
			url: '/api/v1/items',
			type: 'POST',
			data: {item: {name: name, description: description}},
			success: (item) => {
				this.props.handleSubmit(item)
			}

		});

		this.refs.name.value = '';
		this.refs.description.value = '';

	},

	render() {
		return (
				<div 	>
					<h1>New Item</h1>

					<form onSubmit={this.handleSubmit}>
						<div className="input-field">
							<input id="name" type="text" ref="name" class="validate" required/>
							<label for="name">Enter Name of Item</label>
						</div>
						<div className="input-field">
							<input type="text"ref="description" class="validate" required />
							<label for="name">Enter Description</label>
						</div>
						

						<button className="waves-effect waves-light btn">Submit</button>
					</form>

				</div>

			)
	}
})