import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: "ramen",
    image:
      "https://img1.daumcdn.net/thumb/R720x0/?fname=https://t1.daumcdn.net/liveboard/realfood/d3d9b8fce02048bfb5564fd1b344f1cb.jpg",
    rating:4
  },
  {
    id:2,
    name: "dongas",
    image:
      "https://news.samsung.com/kr/wp-content/uploads/2015/09/%ED%88%AC%EB%AA%A8%EB%A1%9C%EC%9A%B0%EC%97%90%EC%84%B8%EC%9D%B4%EA%B0%80%EC%9E%A5%EC%8A%AC%ED%94%88%EC%9D%8C%EC%8B%9D8.jpg",
    rating:3.4
  },
  {
    id:3,
    name: "dackgasmsal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7M-7uSQqhzi2OkBczd_Fn6ZcSn-jeoNp5fM8h5zvQALINaeNA",
    rating:2.3
  }
]

function Food({ name, picture, rating }) {
  console.log();
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}></img>
  </div>
  )
}


Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}


function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} key={dish.id} rating={dish.rating}></Food>
      ))}
    </div>
  );
}

export default App;
