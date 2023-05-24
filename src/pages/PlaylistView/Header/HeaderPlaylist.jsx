import styles from './HeaderPlaylist.module.css';

import { useEffect, useRef, useState } from 'react';
import InfoLine from './InfoLine';

function HeaderPlaylist(props) {
    const [titleSize, setTitleSize] = useState({
        width: 10,
        height: 10,
        fontSize: 3,
    });
    const playlistTitle = useRef();
    const playlistInfoContainer = useRef();

    useEffect(() => {
        playlistTitleSizing();
    }, [props.playlistInfo]);

    useEffect(() => {
        if (titleSize.height === 10) return;
        const fontSizeArray = ['3.2rem', '4.8rem', '7.2rem', '9.6rem'];
        let lastMove = 0;
        window.addEventListener('resize', () =>
            resizeTitle(lastMove, fontSizeArray)
        );
        return () => {
            window.removeEventListener('resize', () => {
                if (!playlistTitle.current) return;
                resizeTitle(lastMove, fontSizeArray);
            });
        };
    }, [titleSize]);

    function resizeTitle(lastMove, fontSizeArray) {
        if (Date.now() - lastMove > 100) {
            lastMove = Date.now();
            // TODO: fix the title size with window size increasing
            // if (
            //     playlistInfoContainer.current.clientWidth >
            //     titleSize.width + 200
            // ) {
            //     if (titleSize.fontSize === 3) return;
            //     console.log('bigger');
            //     playlistTitle.current.style.fontSize =
            //         fontSizeArray[titleSize.fontSize + 1];
            //     setTitleSize({
            //         width: playlistTitle.current.clientWidth,
            //         height,
            //         fontSize: titleSize.fontSize + 1,
            //     });
            // }
            if (playlistTitle.current.clientHeight > titleSize.height) {
                if (titleSize.fontSize === 0) return;

                console.log('smaller', titleSize.fontSize - 1);
                playlistTitle.current.style.fontSize =
                    fontSizeArray[titleSize.fontSize - 1];
                setTitleSize({
                    height: playlistTitle.current.clientHeight,
                    fontSize: titleSize.fontSize - 1,
                });
            }
        }
    }

    function playlistTitleSizing() {
        if (!playlistTitle.current) return;
        setTitleSize({
            width: playlistTitle.current.clientWidth,
            height: playlistTitle.current.clientHeight,
            fontSize: 3,
        });
    }
    console.log('props.playlistinfo', props.playlistInfo);
    return (
        <>
            {props.playlistInfo ? (
                <div
                    ref={playlistInfoContainer}
                    className={styles['playlist-info-container']}
                >
                    <img
                        className={styles['playlist-info-image']}
                        src={props.playlistInfo.images[0].url}
                        alt="playlist-image"
                    />
                    <div className={styles['playlist-info-text-container']}>
                        <p className={styles['info-playlist-type']}>
                            {props.option === 'album'
                                ? 'Album'
                                : 'Liste de lecture'}
                        </p>
                        <p
                            ref={playlistTitle}
                            className={styles['info-playlist-title']}
                        >
                            {props.playlistInfo.name}
                        </p>
                        <InfoLine
                            playlistInfo={props.playlistInfo}
                            option={props.option}
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default HeaderPlaylist;
