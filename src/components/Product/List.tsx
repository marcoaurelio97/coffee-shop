import Table from 'react-bootstrap/Table';

const List = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Pão na chapa</td>
          <td>R$ 10,00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Chocolate quente</td>
          <td>R$ 5,00</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default List;