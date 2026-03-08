document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт senior загружен. Добро пожаловать!');

    const profileLink = document.getElementById('profile-link');
    const channelLink = document.getElementById('channel-link');

    if (profileLink) {
        profileLink.addEventListener('click', function(e) {
            console.log('Переход в профиль: t.me/snosilo');
        });
    }

    if (channelLink) {
        channelLink.addEventListener('click', function(e) {
            console.log('Переход в канал: t.me/killopg');
        });
    }
});
