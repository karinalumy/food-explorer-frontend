import lettuce from '../../assets/alface.png';
import tomato from '../../assets/tomate.png';
import radish from '../../assets/rabanete.png';
import breadNaan from '../../assets/pao-naan.png';
import bread from '../../assets/pao.png';
import ham from '../../assets/presunto.png';
import arugula from '../../assets/rucula.png';
import shrimp from '../../assets/camarao.png';
import pasta from '../../assets/massa.png';
import pesto from '../../assets/pesto.png';
import cucumber from '../../assets/pepino.png';
import plum from '../../assets/ameixa.png';
import flour from '../../assets/farinha.png';
import peach from '../../assets/pessego.png';
import almonds from '../../assets/amendoas.png';
import egg from '../../assets/claras.png';
import damascus from '../../assets/damasco.png';
import passionFruit from '../../assets/maracuja.png';
import coffee from '../../assets/cafe.png';
import cinnamon from '../../assets/canela.png';
import aniz from '../../assets/aniz.png';
import lemon from '../../assets/limao.png';
import whiskey from '../../assets/whiskey.png';
import apple from '../../assets/maca.png';
import potato from '../../assets/batata.png';
import onion from '../../assets/cebola.png';
import almondflour from '../../assets/farinha.png';
import coke from '../../assets/coca.png';
import butter from '../../assets/manteiga.png';
import mint from '../../assets/hortela.png';
import sugar from '../../assets/acucar.png';

import { Container } from './styles';

export function Ingredient({ingredient}) {

  function fetchImageIngredient(name) {
    let ingredient = name.toLowerCase().trim()
    
    let result;
    
    if (ingredient == "alface") {
      return result = lettuce
    } else if (ingredient == "tomate") {
      return result = tomato
    } else if (ingredient == "rabanete") {
      return result = radish
    } else if (ingredient == "pao-naan") {
      return result = breadNaan
    } else if (ingredient == "pão") {
      return result = bread
    } else if (ingredient == "presunto de parma") {
      return result = ham
    } else if (ingredient == "rúcula") {
      return result = arugula
    } else if (ingredient == "camarão") {
      return result = shrimp
    } else if (ingredient == "massa") {
      return result = pasta
    } else if (ingredient == "pesto") {
      return result = pesto
    } else if (ingredient == "pepino") {
      return result = cucumber
    } else if (ingredient == "ameixa") {
      return result = plum
    } else if (ingredient == "farinha") {
      return result = flour
    } else if (ingredient == "pêssego") {
      return result = peach
    } else if (ingredient == "amêndoas") {
      return result = almonds
    } else if (ingredient == "claras") {
      return result = egg
    } else if (ingredient == "damasco") {
      return result = damascus
    } else if (ingredient == "maracujá") {
      return result = passionFruit
    } else if (ingredient == "café") {
      return result = coffee
    } else if (ingredient == "canela") {
      return result = cinnamon
    } else if (ingredient == "anis estrelado") {
      return result = aniz                
    } else if (ingredient == "limão") {
      return result = lemon
    } else if (ingredient == "whiskey") {
      return result = whiskey
    } else if (ingredient == "maçã") {
      return result = apple
    } else if (ingredient == "coca-cola") {
      return result = coke
    } else if (ingredient == "farinha de amendoas") {
      return result = almondflour
    } else if (ingredient == "coca cola") {
      return result = coke
    } else if (ingredient == "presunto") {
      return result = ham
    } else if (ingredient == "cebola") {
      return result = onion
    } else if (ingredient == "batata") {
      return result = potato
    } else if (ingredient == "manteiga") {
      return result = butter
    } else if (ingredient == "hortelã") {
      return result = mint
    } else if (ingredient == "açúcar") {
      return result = sugar 
    } else {
      return result = damascus
    }
  }
  
  let result = fetchImageIngredient(ingredient)
  
    return (
      <Container>
        <img src={result} alt="" />
        <span className="ingredient-name">{ingredient}</span>
      </Container>
    )
  }