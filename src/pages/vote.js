import React, {Component} from 'react';
export default class Counter extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		countries : [{name:"india",votes:0},
					{name:"australia" , votes:0},
				{name:"South Africa", votes:0},
				{name:"WestIndies", votes:0},
				{name:"Srilanka",votes:0}]
				
	 };
	}
vote(i){
	let newCountries =[...this.state.countries];
	newCountries[i].votes++;
	const newSortCountries = newCountries.sort((a,b)=> b.votes - a.votes);
	this.setState({countries:newSortCountries});
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
					
						<button onClick={this.sort}>Rank</button>
				</div>
			</>
		);
	}
	}