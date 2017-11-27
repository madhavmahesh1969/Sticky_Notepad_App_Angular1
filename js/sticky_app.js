var app = angular.module('stickyApp', []);

app.controller('stickyController', [function() {
    this.tasks = [{
        "xVal": 372,
        "yVal": 227,
        "title": "Title",
        "details": "details",
        "display": false
    }, {
        "xVal": 488,
        "yVal": 140,
        "title": "Title",
        "details": "details",
        "display": true
    }, {
        "xVal": 486,
        "yVal": 308,
        "title": "Title",
        "details": "details",
        "display": true
    }];

    this.tasks = (localStorage.getItem('taskList') === null) ? this.tasks : JSON.parse(localStorage.getItem('taskList'));
    this.enableModalWindow = false;

    this.canvasClick = function(e) {
        this.x = e.clientX;
        this.y = e.clientY;
        this.enableModalWindow = true;
    };

    this.toogleStickyPad = function(index) {
        this.tasks[index].display = !this.tasks[index].display;
        localStorage.setItem('taskList', JSON.stringify(this.tasks));
    };
    this.closeModal = function() {
        this.enableModalWindow = false;
    };
    this.addNewStickyData = function(data) {
        var stickyObject = {
            "xVal": this.x,
            "yVal": this.y,
            "title": data.title,
            "details": data.details,
            "display": true
        }

        // Reset the form model.
        this.data = {};
        // Close the modal window
        this.enableModalWindow = false;
        // Push the data to 'tasks' array
        this.tasks.push(stickyObject);
        //Save it into the local storage
        localStorage.setItem('taskList', JSON.stringify(this.tasks));
    };
    this.deleteStickyPad = function(index) {
        this.tasks.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(this.tasks));
    };
}]);