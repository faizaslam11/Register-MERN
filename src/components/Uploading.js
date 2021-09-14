// import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
// import csc from 'country-state-city';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import Swal from 'sweetalert2';
// import { BASE_API_URL } from '../utils/constants';

import axios from 'axios';

import React,{Component} from 'react';

class App extends Component {

	state = {

	// Initially, no file is selected
	selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// Update the state
	this.setState({ selectedFile: event.target.files[0] });
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("api/uploadfile", formData);
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<center><div>
			<h2>File Details:</h2>
			
<p>File Name: {this.state.selectedFile.name}</p>

			
<p>File Type: {this.state.selectedFile.type}</p>

			
<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>

		</div>
    </center>
		);
	} else {
		return (
		<div>
			<br />
		</div>
		);
	}
	};
	
	render() {
	
	return (
    // <center> 	
			<div>
    
			<input type="file" onChange={this.onFileChange}></input>
				<br/>
				<Button variant="secondary" onClick={this.onFileUpload}>
				Upload!
				</Button>
			
		{this.fileData()}
		</div>
	);
	}
}

export default App;
;
