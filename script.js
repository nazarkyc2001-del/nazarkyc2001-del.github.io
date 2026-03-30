document.getElementById('lfgForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = this.querySelectorAll('input, select');
    const nick = inputs[0].value;
    const role = inputs[1].value;
    const gs = inputs[2].value;
    
    const list = document.getElementById('lfgList');
    const newItem = document.createElement('div');
    newItem.className = 'lfg-item';
    newItem.innerHTML = `<span>[LFG]</span> <b>${nick}:</b> ${role.toUpperCase()} ${gs} ищу пати/гильдию!`;
    
    list.prepend(newItem); // Добавляем в начало чата
    this.reset(); // Очищаем форму
});
