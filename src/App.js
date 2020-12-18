import React from 'react'

function Food({ name, image }) {
  return (
    <div>
      <h2>I love {name} </h2>
      <img src={image} />
    </div>
  )
}

const foodIALife = [
  {
    name: 'kimchi',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200909_248%2F1599624109321tYROU_JPEG%2F36985651988064802_1596004012.jpg&type=sc960_832',
  },
  {
    name: 'ramen',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2Fdata17%2F2006%2F8%2F12%2F280%2F31-evol526.jpg&type=sc960_832',
  },
  {
    name: 'samgiopsal',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140402_132%2Foheunae79_1396365544046iG5tB_JPEG%2F%25BB%25EF%25B0%25E3%25BB%25EC%25BF%25C0%25BA%25EC%25B1%25B8%25C0%25CC_%252811%2529.JPG&type=sc960_832',
  },
  {
    name: 'chulumi',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160401_21%2Fsmart_lk_1459497435385dnSdo_JPEG%2F%25C2%25DE%25B2%25D9%25B9%25CC_%25BA%25BA%25C0%25BD_%25C2%25DE%25B2%25D9%25B9%25CC%25BF%25E4%25B8%25AE_%25C2%25DE%25B2%25D9%25B9%25CC%25C8%25BF%25B4%25C9_%25C2%25DE%25B2%25D9%25B9%25CC%25BC%25D5%25C1%25FA_%25C1%25D6%25B2%25D9%25B9%25CC_%25C2%25DE%25B1%25B8%25B9%25CC.jpg&type=sc960_832',
  },
]

function App() {
  return (
    <div>
      hello
      {foodIALife.map(dish => (
        <Food name={dish.name} image={dish.image} />
      ))}
    </div>
  )
}

export default App
