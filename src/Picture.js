import Image from './images/lizard img.jpg';
import './style.css';

function Picture (){
    return(
        <center>
            <div className="box">
               <img src={Image} width={500} height={250} />
               <h2>Lizard</h2>
               <p>Lizards are a widespread group of squamate<br />
               reptiles,with over 6,000 species,ranging across<br />
               all continents except Antarctica</p>
               <a href="lizard img.jpg">SHARE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEARNMORE</a>
            </div>
        </center>
    )
}
export default Picture;