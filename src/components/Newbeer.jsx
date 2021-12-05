import React from 'react'
import {Button} from  'react-bootstrap'

function NewBeer(props){
	const {btnSubmit} = props
	return (
		<form onSubmit={btnSubmit}>
			<input  name="name"  type="text"  placeholder="Enter name"/>
			<input  tagline ="description"  type="text"  placeholder="Enter a tagline "/>
            <input  description  ="description"  type="text"  placeholder="Enter a description  "/>
            <input  first_brewed  ="description"  type="text"  placeholder="Enter a first_brewed  "/>
            <input  brewers_tips  ="description"  type="text"  placeholder="Enter a brewers_tips  "/>
            <input  attenuation_level ="description"  type="number"  placeholder="Enter a attenuation_level "/>
            <input  contributed_by  ="description"  type="text"  placeholder="Enter a contributed_by  "/>
			<Button  type="submit"  >Submit</Button>
		</form>
	)
}

export default NewBeer