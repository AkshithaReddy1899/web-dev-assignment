import React ,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../feature/DataSlice';
import './main.css';

export const Main = () => {
	const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImages())
  },[dispatch])

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
								<img key={item.id} src={item.url} alt="random-img" className="object-cover image m-2" />
							))
						}
						</div>):(<p>Something went wrong try again later</p>)
					}
				</div>
			</div>
			<div className=""></div>
		</div>
	)
}

export default Main;