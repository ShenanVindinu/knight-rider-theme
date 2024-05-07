let audio = document.getElementById("backgroundAudio");

$("#start").eq(0).on('click', () => {
    audio.play();
    $("section>div").css({display: 'block'});
    const duration = 2;
    const delayBetweenAnimations = 0.1;
    const totalElements = 7;
    const delayBetweenDirections = 3000; // 3 seconds delay between directions

    const playLeftToRight = () => {
        for (let i = 1; i <= totalElements; i++) {
            const delay = i * delayBetweenAnimations;
            $("#" + i).css("animation", `lightShow ${duration}s ${delay}s ease-in-out infinite`);
        }
    };


    const playRightToLeft = () => {
        for (let i = totalElements; i >= 1; i--) {
            const delay = (totalElements - i + 1) * delayBetweenAnimations; // Reversing the delay
            $("#" + i).css("animation", `lightShow ${duration}s ${delay}s ease-in-out infinite`);
        }
    };


    const loopAnimations = () => {
        playLeftToRight();
        setTimeout(() => {
            playRightToLeft();
            setTimeout(loopAnimations, delayBetweenDirections);
        }, 1000);
    };

    loopAnimations();
});

$("#stop").eq(0).on('click', () => {
    audio.pause();
    $("section>div").css({display: 'none'});
});