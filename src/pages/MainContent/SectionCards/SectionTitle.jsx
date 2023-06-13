import { NavLink } from 'react-router-dom';
import handleSetPageContent from '../../Logic/handleSetPageContent';

function SectionTitle(props) {
    function setContentType() {
        return props.content.playlists
            ? props.content.playlists
            : props.content.albums
            ? props.content.albums
            : props.content.artists
            ? props.content.artists
            : props.content;
    }

    return (
        <div>
            <NavLink
                className={!props.content && 'disabled'}
                onClick={() => {
                    if (!props.content) return;
                    handleSetPageContent({
                        title: props.info.title,
                        content: setContentType(),
                    });
                }}
                to={'/section'}
            >
                {props.info.title}
            </NavLink>
            <NavLink
                className={!props.content && 'disabled'}
                onClick={() => {
                    if (!props.content) return;
                    handleSetPageContent({
                        title: props.info.title,
                        content: setContentType(),
                    });
                }}
                to={'/section'}
            >
                Tout afficher
            </NavLink>
        </div>
    );
}

export default SectionTitle;
