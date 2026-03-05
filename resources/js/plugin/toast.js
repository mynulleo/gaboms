
import toast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css'

export default {
    install: function (app) {
        app.config.globalProperties.toast = toast;

        app.mixin({
            methods: {
                $toast(message, type, title = '', time = 5000) {
                    this.toast[type]({
                        position: 'topCenter',
                        title: title ? title : type.toUpperCase() + " !!",
                        message,
                        timeout: time,
                    });
                }
            },
        })
    }
};
