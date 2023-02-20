import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import List from './List';

const handleAddProduct = () => {
    console.log(1111)
}

const Product = () => {
    return (
        <>
            <Container>
                <Button variant="primary" onClick={handleAddProduct}>Adicionar</Button>
            </Container>
            <Container>
                <List />
            </Container>
        </>
    )
}

export default Product;