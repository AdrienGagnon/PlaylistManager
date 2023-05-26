function handleCardAmount(container, cardAmount, setCardAmount) {
    const newAmount = Math.ceil(container.current.clientWidth / 150 - 2);
    if (newAmount && newAmount !== cardAmount) {
        setCardAmount(newAmount);
    }
}

export default handleCardAmount;
