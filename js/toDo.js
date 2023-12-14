// For toDo
let $list = $('.tdlApp ul');
let taskPrefix = 'tdl_';

function showTasks() {
    let storageSize = localStorage.length;
    if (storageSize > 0) {
        for (let i = 0; i < storageSize; i++) {
            let key = localStorage.key(i);
            if (key.indexOf(taskPrefix) === 0) {
                $('<li></li>').addClass('tdItem')
                    .attr('data-itemid', key)
                    .text(localStorage.getItem(key))
                    .appendTo($list);
            }
        }
    }
}

$('.tdlApp input').on('keydown', function (e) {
    if (e.keyCode !== 13) return;
    let str = e.target.value;
    e.target.value = "";
    if (str.length > 0) {
        let numberId = 0;
        $list.children().each(function (index, el) {
            let elementId = $(el).attr('data-itemid').slice(4);
            if (elementId > numberId)
                numberId = elementId;
        });
        numberId++;
        localStorage.setItem(taskPrefix + numberId, str);
        $('<li></li>').addClass('tdItem')
            .attr('data-itemid', taskPrefix + numberId)
            .text(str).appendTo($list);
    }
});

$list.on('click', '.tdItem', function (e) {
    let $task = $(e.target);
    localStorage.removeItem($task.attr('data-itemid'));
    $task.remove();
});

showTasks();