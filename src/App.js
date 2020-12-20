import React from 'react'
import PropTypes from 'prop-types'

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200909_248%2F1599624109321tYROU_JPEG%2F36985651988064802_1596004012.jpg&type=sc960_832',
    rating: 5,
  },
  {
    id: 2,
    name: 'ramen',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2Fdata17%2F2006%2F8%2F12%2F280%2F31-evol526.jpg&type=sc960_832',
    rating: 4.3,
  },
  {
    id: 3,
    name: 'samgiopsal',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140402_132%2Foheunae79_1396365544046iG5tB_JPEG%2F%25BB%25EF%25B0%25E3%25BB%25EC%25BF%25C0%25BA%25EC%25B1%25B8%25C0%25CC_%252811%2529.JPG&type=sc960_832',
    rating: 3.7,
  },
  {
    id: 4,
    name: 'chulumi',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160401_21%2Fsmart_lk_1459497435385dnSdo_JPEG%2F%25C2%25DE%25B2%25D9%25B9%25CC_%25BA%25BA%25C0%25BD_%25C2%25DE%25B2%25D9%25B9%25CC%25BF%25E4%25B8%25AE_%25C2%25DE%25B2%25D9%25B9%25CC%25C8%25BF%25B4%25C9_%25C2%25DE%25B2%25D9%25B9%25CC%25BC%25D5%25C1%25FA_%25C1%25D6%25B2%25D9%25B9%25CC_%25C2%25DE%25B1%25B8%25B9%25CC.jpg&type=sc960_832',
    rating: 2.6,
  },
]

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  )
}

export default App
