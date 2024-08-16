import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Header () {
    let location = useLocation();
    const currentTotal = useSelector((store) => store.total);

    return (
        <>
        {location.pathname !== '/admin' && <Container className="App-header" sx={{display: 'flex', justifyContent: 'flex-end', alignItems:'center', columnGap: '35%', minWidth: '100%', mx:'0', maxWidth:'100%'}}>
            <h1 className="App-title">Prime Pizza</h1>
            <p>Total: ${currentTotal}</p>
        </Container>}

    
        {location.pathname === '/admin' && <Container className="App-header" sx={{display: 'flex', justifyContent: 'center', alignItems:'center', columnGap: '40%', minWidth: '100%', mx:'0', maxWidth:'100%'}}>
            <h1 className="App-title">Prime Pizza</h1>
            </Container>}
        </>
    )
}

export default Header;