import { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers =[
  {
  'id': 1,
  'image': 'https://www.hsinfo.co.kr/files/attach/images/447/99b983892094b5c6d2fc3736e15da7d1.png',
  'name': '홍길동동',
  'birthday': '12345',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://www.hsinfo.co.kr/files/attach/images/447/99b983892094b5c6d2fc3736e15da7d1.png',
  'name': '고객',
  'birthday': '1254345',
  'gender': '여자',
  'job': '회사원'
},
{
  'id': 3,
  'image': 'https://www.hsinfo.co.kr/files/attach/images/447/99b983892094b5c6d2fc3736e15da7d1.png',
  'name': '한신',
  'birthday': '1234445',
  'gender': '남자',
  'job': '대학생'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
          );
        })
      }
    </div>
  );
}
}

export default App;
