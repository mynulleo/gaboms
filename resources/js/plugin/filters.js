import moment from "moment";

let filters = {
    /**
     *
     * @param {string} value
     * @param {string} format
     * @returns
     */
    enFormat(value, format = "ll") {
        moment.locale("en-gb");
        const time = moment(String(value)).format(format);

        if (time == "Invalid date") {
            return "-";
        }

        return time;
    },

    /**
     *
     * @param {string} str
     * @returns
     */
    capitalize(str) {
        if (!str) return "-";
        return String(str)
            .replace(/and/gi, "&")
            .replace(/\-|\_/gi, " ")
            .replace(/([A-Z][^A-Z]+)/g, " $1")
            .split(" ")
            .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
            .join(" ");
    },

    today() {
        return moment().format("D MMM, YYYY");
    },

    money(val) {
        return Number(val || 0).toFixed(2);
    },

    formatBDT(amount) {
        if (!amount || isNaN(amount)) return "৳ 0.00";

        return (
            "৳ " +
            Number(amount).toLocaleString("en-BD", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
        );
    },
};

export default {
    install: function (app) {
        app.config.globalProperties.$filter = filters;
    },
};
