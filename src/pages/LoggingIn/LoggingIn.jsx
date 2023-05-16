import authentication from '../../authentication';

import { gsap } from 'gsap';

import band from './assets/band.jpg';
import drums from './assets/drums.jpg';
import guitare from './assets/guitare.jpg';
import microphone from './assets/microphone.jpg';
import piano from './assets/piano.jpg';
import show from './assets/show.jpg';
import vinyl from './assets/vinyl.jpg';
import vinyls from './assets/vinyls.jpg';

import linkedIn from './assets/linkedin-logo.png';

import styles from './LoggingIn.module.css';
import { useEffect, useRef } from 'react';

const LoggindIn = () => {
    const parallaxContainer = useRef();

    useEffect(() => {
        parallax();
    }, []);

    function parallax() {
        const arr = Array.prototype.slice.call(
            parallaxContainer.current.children
        );
        let lastMove = 0;
        /* document.addEventListener('mousemove', e => {
            if (Date.now() - lastMove < 100) return;
            arr.forEach(element => {
                const speed = element.getAttribute('data-speed');
                const x =
                    speed *
                    (parallaxContainer.current.clientWidth / 2 - e.pageX);
                const y =
                    speed *
                    (parallaxContainer.current.clientHeight / 2 - e.pageY);
                element.style = `translate: ${x}px ${y}px`;
            });
            lastMove = Date.now();
        });

        document.addEventListener('mouseleave', e => {
            arr.forEach(element => {
                element.style = `translate: 0px 0px`;
            });
        }); */
    }

    return (
        <>
            <div id={styles.parallax} ref={parallaxContainer}>
                <img src={band} alt="" data-speed="0.2" />
                <img src={drums} alt="" data-speed="0.2" />
                <img src={guitare} alt="" data-speed="0.2" />
                <img src={microphone} alt="" data-speed="0.18" />
                <img src={piano} alt="" data-speed="0.15" />
                <img src={show} alt="" data-speed="0.12" />
                <img src={vinyl} alt="" data-speed="0.1" />
                <img src={vinyls} alt="" data-speed="0.05" />
            </div>
            <div className={styles.container}>
                <h1>Bienvenue sur Playlist Manager</h1>
                <div>
                    <p>Connectez-vous à Spotify: </p>
                    <button onClick={authentication}>Connection</button>
                </div>
                <a
                    className={styles.linkToLinkedIn}
                    href="www.linkedin.com/in/adrien-gagnon"
                >
                    <p>Par Adrien Gagnon</p>
                    <img src={linkedIn} alt="" />
                </a>
            </div>
        </>
    );
};

export default LoggindIn;
