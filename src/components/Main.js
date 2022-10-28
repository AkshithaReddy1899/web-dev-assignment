import React ,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../feature/DataSlice';

export const Main = () => {
	const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  },[dispatch])

	const data = useSelector((state) => state.dataReducer)
	console.log(data);

	return (
		<div className="text-center">
			<div className="main-container">
				{
				data.displayImages.length>0	? (<div className="card-container">
						{
							data.displayImages.map((item) => (
								<div key={item.id} className="image m-2" style={{background:`url("${item.url}")no-repeat center/cover`}}>
								</div>
							))
						}
					</div>
					): (<p>Something went wrong try agian</p>)
				}
		  </div>
		</div>
	)
}

export default Main;
