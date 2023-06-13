import './CardsSection.css';
import ListOfCardsContainer from './ListOfCardsContainer';
import SectionTitle from './SectionTitle';

function CardsSection(props) {
    return (
        <li className="cards-section">
            <SectionTitle info={props.info} content={props.content} />
            <ListOfCardsContainer info={props.info} content={props.content} />
        </li>
    );
}

export default CardsSection;
