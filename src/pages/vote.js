import React, {Component} from 'react';
import img from 'React-image';
class Vote extends Component{
	constructor(props){
		super(props);
		this.state = {
			countries: [
				{name: "India", votes: 0},
				{name: "Australia", votes: 0},
				{name: "South Africa", votes: 0},
				{name: "West Indies", votes: 0}
			]
		}
    }
    vote (i) {
		let newCountries = [...this.state.countries];
		newCountries[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({countries: newCountries});
		
	}
	
    render(){
		return(
			<>
				<div className="heading">
				<h1>Vote for your country!</h1>
				</div>
				<div className="country">
					{
						this.state.countries.map((count, i) => 
							<div key={i} className="country">
								<div className="voteCount">
									{count.votes}
								</div>
								<div className="countryName">
									{count.name}
								</div>

								<button onClick={this.vote.bind(this, i)}>Vote</button>
								
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default Vote;

    