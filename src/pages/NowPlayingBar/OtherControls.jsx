function OtherControls() {
    return (
        <>
            <button
                className="Button-sc-1dqy6lx-0 jVhTjB KAZD28usA1vPz5GVpm63"
                data-testid="control-button-queue"
                data-active="false"
                aria-label="Mettre en file d'attente"
                data-encore-id="buttonTertiary"
                aria-expanded="false"
            >
                <span
                    aria-hidden="true"
                    className="IconWrapper__Wrapper-sc-16usrgb-0 dlqYDF"
                >
                    <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                        className="Svg-sc-ytk21e-0 ldgdZj"
                    >
                        <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
                    </svg>
                </span>
            </button>
            <button
                className="control-button INitzTSjokOMEJOc6P2H"
                aria-label="Se connecter à un appareil"
                aria-expanded="false"
                id="device-picker-icon-button"
            >
                <svg
                    role="presentation"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    className="Svg-sc-ytk21e-0 ldgdZj"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                >
                    <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
                    <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                </svg>
            </button>
            <div>
                <button
                    className="volume-bar__icon-button control-button"
                    aria-label="Désactiver le son"
                    aria-describedby="volume-icon"
                    data-testid="volume-bar-toggle-mute-button"
                    aria-expanded="false"
                >
                    <svg
                        role="presentation"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        aria-label="Volume moyen"
                        id="volume-icon"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                        className="Svg-sc-ytk21e-0 ldgdZj"
                    >
                        <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path>
                    </svg>
                </button>
                <div>Sound Bar</div>
            </div>
            <button
                className="control-button"
                aria-label="Plein écran"
                title="Plein écran"
                data-testid="fullscreen-mode-button"
                aria-expanded="false"
            >
                <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 ldgdZj"
                >
                    <path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path>
                </svg>
            </button>
        </>
    );
}

export default OtherControls;
