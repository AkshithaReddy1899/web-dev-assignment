import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, removeImage } from '../feature/DataSlice';
import './main.css';
import { useAlert } from 'react-alert';


export const Main = () => {
	const dispatch = useDispatch();
	const alert = useAlert();

	const data = useSelector((state) => state.dataReducer.displayImages)

	const handleAdd = (e) => {
		e.preventDefault();
		dispatch(fetchImages())
		alert.show('Image added successfully', {timeout: 2000})
	}

	const handleRemove = (e) => {
		e.preventDefault();
		if (data.length >0) {
			const obj = data.slice(-1)[0]
		  dispatch(removeImage(obj.id))
			alert.show('Image removed successfully', {timeout: 3000})
		}else if(data.length === 0) {
			alert.show('No images to remove', {timeout: 3000})
		}
	}
	
	return (
		<div>
			<div className="text-center">
				<div className="main-container">
				  <div className="card-container">
					{
						data.length> 0 ? (
							<>
							{data.map((item) => (
								<div key={item.id} className="image-container m-2 " style={{background: `url(${item.url}) center/cover no-repeat`}}>
								</div>
							))
						  }</>
						):(<p className="text-center m-auto">Something went wrong try again later</p>)
					}
					</div>
				</div>
			</div>
			<div className="mx-auto text-center">
				<button
				  type="button" className="mx-4 bg-indigo-900 w-20 p-1 rounded shadow-lg"
					onClick={(e) => {handleAdd(e)}}>Add</button>
				<button
				  type="button" className="mx-4 bg-indigo-900 w-20 p-1 rounded shadow-lg"
					onClick={(e) => {handleRemove(e)}}>Remove</button>
			</div>
		</div>
	)
}

export default Main;