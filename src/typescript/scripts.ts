/**
 * Created by ydomenjoud on 05/10/16.
 */

/**
 * Ajax call
 * @param url
 */
function get(url: string){
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();
    request = null;
}

/**
 * ip of gopro
 * @type {string}
 */
let ip = '10.5.5.9';

let buttons = document.querySelectorAll("button");
[].forEach.call(buttons, (button) => {
    button.addEventListener("click", function(element){
        let path = this.dataset.path;
        let param = this.dataset.param;
        let password = (<HTMLInputElement>document.getElementById('password')).value;
        let url_complete = `http://${ip}/${path}?t=${password}&p=${param}`;
        get(url_complete);
    });
});

