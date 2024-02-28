// Функция для отображения выбранной вкладки
function showTab(tabName) {
    // Скрыть все вкладки
    var tabs = document.getElementsByClassName('content');
    for (const tab of tabs) {
        tab.classList.remove('active');
    }

    // Отобразить выбранную вкладку
    document.getElementById(tabName).classList.add('active');

    // Выделить активную вкладку
    var tabButtons = document.getElementsByClassName('tab');
    for (const button of tabButtons) {
        button.classList.remove('active-tab');
    }
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active-tab');
}
