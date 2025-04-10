// Офисы
{
    const officeSection = document.querySelector('.softline-office-section');
    if (officeSection) {
        const openButton = officeSection.querySelector('.softline-office-section_header > h2 > button');
        if (openButton) {
            const dropdown = officeSection.querySelector('#office-list');
            const navigation = officeSection.querySelector('.softline-office-section_header-navigation');
            openButton.addEventListener('click', () => {
                dropdown.classList.toggle('transition_hidden');
                openButton.classList.toggle('with-marker_extend_opened');
                navigation.classList.toggle('softline-office-section_header-navigation_hidden');
            });
        }
    }
}
