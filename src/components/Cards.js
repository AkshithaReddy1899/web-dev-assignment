import React from 'react';
import './card.css';

const Cards = ({images}) => {
	return (
		<div id="card">
			{
				images.map((item) => (
					<div key={item.id} className="image m-5 border">
					</div>
				))
			}
		</div>
	)
}

export default Cards;
