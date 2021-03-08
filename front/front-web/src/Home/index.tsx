import './styles.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
       <>
        <div className="home-container">
            <div className="home-content">
               <div className="home-actions">
                   <h1 className="home-title">
                    Faça seu cadastro!!<br />  
                   </h1>
                   <h3 className="home-subtitle">
                  Fique atento aos campos abaixo <br /> 
                   </h3>

                                    <form>
                    <label className="home-subtitle">
                        Nome:
                        <input type="text" name="name" />
                    </label>

                    <br /> 
                    <br /> 
                    <label className="home-subtitle">
                         CPF: 
                        <input type="text" name="cpf" />
                    </label>

                    <br /> 
                    <br /> 
                    <label className="home-subtitle">
                    Email:
                        <input type="text" name="email" />
                    </label>
                    <br /> 
                    <br /> 
                    <label className="home-subtitle">
                        Senha:
                        <input type="text" name="password" />
                    </label>
                    <br /> 
                    <br /> 

                   
                    <Link to="/orders" >
                    <input className="home-subtitle"
                     type="submit" value="Enviar" />
                     </Link>
                    </form>
               </div>
               
            </div>
        </div>
        <Footer />
       </>
    )
}

export default Home;