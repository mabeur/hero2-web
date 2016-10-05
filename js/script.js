/**
 * Created by ydomenjoud on 05/10/16.
 */
/**
 * Ajax call
 * @param url
 */
function get(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();
    request = null;
}
/**
 * ip of gopro
 * @type {string}
 */
var ip = '10.5.5.9';
var buttons = document.querySelectorAll("button");
[].forEach.call(buttons, function (button) {
    button.addEventListener("click", function (element) {
        var path = this.dataset.path;
        var param = this.dataset.param;
        var password = document.getElementById('password').value;
        var url_complete = "http://" + ip + "/" + path + "?t=" + password + "&p=" + param;
        get(url_complete);
    });
});
