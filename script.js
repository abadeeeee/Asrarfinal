// لفتح وإغلاق المينيو
function toggleMenu() {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.classList.toggle('hidden');
}

// لفتح وإغلاق البوب أب
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// عرض البوب أب عند تحميل الصفحة
window.onload = function () {
    const popup = document.getElementById('popup');

    // التحقق إذا كان البوب أب قد ظهر من قبل
    if (!localStorage.getItem('popupShown')) {
        popup.style.display = 'flex'; // عرض البوب أب عند تحميل الصفحة
        localStorage.setItem('popupShown', 'true');
    }
};