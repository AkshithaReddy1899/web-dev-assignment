import React ,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../feature/DataSlice';
import './main.css';

export const Main = () => {
	const dispatch = useDispatch();

	const handleAdd = (e) => {
		e.preventDefault();
		dispatch(fetchImages())
	}

	const data = useSelector((state) => state.dataReducer)
	console.log(data);
	
	return (
		<div>
			<div className="text-center">
				<div className="main-container">
					{
						data.displayImages.length> 0 ? (
						<div className="card-container">
							{
							data.displayImages.map((item) => (
								<div key={item.id} className="image-container m-2 " style={{background: `url(${item.url}) center/cover no-repeat`}}>
								</div>
							))
						  }
						</div>):(<p>Something went wrong try again later</p>)
					}
				</div>
			</div>
			<div className="mx-auto text-center">
				<button
				  type="button" className="mx-4 bg-indigo-900 w-20 p-1 rounded shadow-lg"
					onClick={(e) => {handleAdd(e)}}>Add</button>
				<button type="button" className="mx-4 bg-indigo-900 w-20 p-1 rounded shadow-lg">Remove</button>
			</div>
		</div>
	)
}

export default Main;