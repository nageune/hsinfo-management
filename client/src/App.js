import { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/system';

// Styled 컴포넌트 정의
const StyledPaper = styled(Paper)({
  width: "100%",
  marginTop: "24px",
  overflow: "auto",
});

const StyledTable = styled(Table)({
  minWidth: 1080,
});

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

function App () {
    return (
      <StyledPaper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}
          </TableBody>
        </StyledTable>
    </StyledPaper>
  );
}

export default App;