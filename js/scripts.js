/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const navSectionLinks = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link[href^="#"]')
    );

    const navSections = navSectionLinks
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(section => section);

    const setActiveNavLink = sectionId => {
        navSectionLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
    };

    const sectionObserver = new IntersectionObserver(entries => {
        const visibleSections = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length) {
            setActiveNavLink(visibleSections[0].target.id);
        }
    }, {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.05, 0.25, 0.5, 0.75],
    });

    navSections.forEach(section => sectionObserver.observe(section));

});
