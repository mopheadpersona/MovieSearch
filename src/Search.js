import React from 'react';
import { Button, Input, InputGroupAddon, InputGroup } from 'reactstrap';

const Search = ({ value, onChange, onSubmit, onInput }) => {
	return(
		<div className="search-bar" style={{padding: "10px"}}>
			<form onSubmit={onSubmit}>
				<InputGroup>
					<Input 
						placeholder="Movie Title"
						value={value}
						onChange={onChange}
						onInput={onInput}
					/>
					<InputGroupAddon addonType="append"><Button color="primary" >Find!</Button></InputGroupAddon>
				</InputGroup>
			</form>
		</div>
	);
}

export default Search;