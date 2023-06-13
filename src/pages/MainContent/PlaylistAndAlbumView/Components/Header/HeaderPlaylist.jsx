import styles from './HeaderPlaylist.module.css';

import { useEffect, useRef, useState } from 'react';
import InfoLine from './InfoLine';

function HeaderPlaylist(props) {
    const [titleSize, setTitleSize] = useState({
        width: 10,
        height: 10,
        fontSize: 3,
    });
    const contentTitle = useRef();
    const contentContainer = useRef();

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
                if (!contentTitle.current) return;
                resizeTitle(lastMove, fontSizeArray);
            });
        };
    }, [titleSize]);

    function resizeTitle(lastMove, fontSizeArray) {
        if (Date.now() - lastMove > 100 && contentTitle.current) {
            lastMove = Date.now();
            // TODO: fix the title size with window size increasing
            // if (
            //     contentContainer.current.clientWidth >
            //     titleSize.width + 200
            // ) {
            //     if (titleSize.fontSize === 3) return;
            //     console.log('bigger');
            //     contentTitle.current.style.fontSize =
            //         fontSizeArray[titleSize.fontSize + 1];
            //     setTitleSize({
            //         width: contentTitle.current.clientWidth,
            //         height,
            //         fontSize: titleSize.fontSize + 1,
            //     });
            // }
            if (contentTitle.current.clientHeight > titleSize.height) {
                if (titleSize.fontSize === 0) return;

                contentTitle.current.style.fontSize =
                    fontSizeArray[titleSize.fontSize - 1];
                setTitleSize({
                    height: contentTitle.current.clientHeight,
                    fontSize: titleSize.fontSize - 1,
                });
            }
        }
    }

    function playlistTitleSizing() {
        if (!contentTitle.current) return;
        setTitleSize({
            width: contentTitle.current.clientWidth,
            height: contentTitle.current.clientHeight,
            fontSize: 3,
        });
    }

    function TypeOfContentTitle(option) {
        let typeOfTitle;
        switch (option.option) {
            case 'album':
                typeOfTitle = 'Album';
                break;
            case 'playlist':
                typeOfTitle = 'Liste de lecture';
                break;
            case 'artist':
                typeOfTitle = 'Artiste';
                break;
            case 'track':
                typeOfTitle = 'Chanson';
                break;
        }
        return typeOfTitle;
    }

    return (
        <>
            {props.playlistInfo ? (
                <div
                    ref={contentContainer}
                    className={styles['playlist-info-container']}
                >
                    <img
                        className={styles['playlist-info-image']}
                        src={
                            props.playlistInfo.images
                                ? props.playlistInfo.images[0].url
                                : props.playlistInfo.album.images[0].url
                        }
                        alt="playlist-image"
                    />
                    <div className={styles['playlist-info-text-container']}>
                        <p className={styles['info-playlist-type']}>
                            <TypeOfContentTitle option={props.option} />
                        </p>
                        <p
                            ref={contentTitle}
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
