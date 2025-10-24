<script src="../js/script.js"></script>

document.addEventListener('DOMContentLoaded', () => {

    const onboardingComplete = sessionStorage.getItem('onboardingComplete');


    if (!onboardingComplete && !document.referrer.includes('onboarding.html')) {
        window.location.href = 'onboarding.html';
        return;
    }

    if (!document.referrer.includes('onboarding.html')) {
        window.location.href = 'onboarding.html';
    }
});

console.log("JavaScript is connected!");