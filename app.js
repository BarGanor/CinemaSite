const container = document.getElementById('container');
let hall;

const settingApplied = (rows, seats, name, form) => {
    form.remove();
    hall = new Hall(container,rows, seats, name);
    hall.render();

}

const settings = new HallSettings(container, settingApplied)
settings.render();


