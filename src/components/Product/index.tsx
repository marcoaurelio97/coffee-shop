import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import List from './List';
import axios from 'axios';

const handleAddProduct = async () => {
    console.log(1111)

    await axios.post("http://localhost:4000/api/product")
        .then((res) => {
            console.log(1, res)
        })
        .catch((err) => {
            console.log(2, err)
        })
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