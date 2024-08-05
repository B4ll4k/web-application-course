$(document).ready(function() {
    $('#task-form').on('submit', function(event) {
        event.preventDefault();
        
        var taskObj = $(this).toObject();
        addTask(taskObj);

        $(this).trigger('reset');
    });

    $('#print-object').click(function() {
        var obj = $('#task-form').toObject();
        console.log(JSON.stringify(obj));
    });

    $('#load-object').click(function() {
        var obj = {
            task: 'Demo Task',
            'due-date': '2024-12-31'
        };
        $('#task-form').fromObject(obj);
    });
});

$.fn.toObject = function() {
    return this.find('[name]').get().reduce(function(obj, el) {
        obj[el.name] = $(el).val();
        return obj;
    }, {});
};

$.fn.fromObject = function(obj) {
    return this.find('[name]').each(function() {
        if (obj[this.name]) {
            $(this).val(obj[this.name]);
        }
    });
};

function addTask(task) {
    var taskItem = $('<li>').text(task.task + ' (Due: ' + task['due-date'] + ')');
    $('#task-list').append(taskItem);
}
