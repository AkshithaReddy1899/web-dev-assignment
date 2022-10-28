import React ,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../feature/DataSlice';

export const Main = () => {
	const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImages())
  },[dispatch])

	const data = useSelector((state) => state.dataReducer)
	console.log(data);
	
	return (
		<div>main</div>
	)
}

export default Main;