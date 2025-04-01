import React, { useState, useEffect } from 'react';
import './App.css';
import Customer from './components/Customer';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
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

function App () {
  const [customers, setCustomers] = useState("");

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch("/api/customers");
      const body = await response.json();
      return body;
    };

    callApi()
      .then((res) => setCustomers(res))
      .catch((err) => console.log(err));
  }, []);

      return (
      <StyledPaper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>접수일</TableCell>
              <TableCell>완료일</TableCell>
              <TableCell>담당자</TableCell>
              <TableCell>제품명</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers
            ? customers.map((c) => (
                <Customer
                  key={c.id} // map 을 사용하려면 key 라는 속성이 있어야 함(안하면 Console창에 에러가 발생)
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              ))
            : ""}
          </TableBody>
        </StyledTable>
    </StyledPaper>
  );
}

export default App;