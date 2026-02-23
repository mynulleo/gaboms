import "magnific-popup";

const xTooltip = {
    mounted(el, binding) {
        const showTooltip = binding.value == false ? false : true;

        if (showTooltip) {
            bootstrap.Tooltip.getOrCreateInstance(el, {
                trigger: "hover",
            });
        }
    },

    beforeUnmount(el, binding) {
        const showTooltip = binding.value == false ? false : true;

        if (showTooltip) {
            const tooltip = bootstrap.Tooltip.getOrCreateInstance(el);
            tooltip.dispose();
        }
    },
};

const xZoomImage = {
    mounted(el, binding) {
        const enableMagnify = binding.value == false ? false : true;

        if (enableMagnify) {
            // Ensure jQuery is applied to the element
            $(el).css("cursor", "pointer");

            $(el).magnificPopup({
                type: "image",
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: "ease-in-out",
                },
                callbacks: {
                    open: function () {
                        $("html").css({
                            "overflow-y": "scroll", // Ensure scrollbar is always visible
                            "padding-right": "0", // No extra padding required
                            "margin-right": "0", // No margin shift
                        });

                        // Prevent background scrolling
                        $("body").css({
                            overflow: "hidden", // Lock scrolling on body
                        });

                        // Remove margin when the popup opens
                        // $("html, body").css({
                        //     "margin-right": "0",
                        //     overflow: "auto",
                        // });
                    },
                    close: function () {
                        // Reset the styles after the popup is closed
                        $("html").css({
                            "overflow-y": "",
                            "padding-right": "",
                            "margin-right": "",
                        });

                        $("body").css({
                            overflow: "", // Unlock scrolling
                        });

                        // Reset the margin when the popup closes
                        // $("html, body").css({
                        //     "margin-right": "",
                        //     overflow: "",
                        // });
                    },
                },
            });
        }
    },

    beforeUnmount(el, binding) {
        const enableMagnify = binding.value == false ? false : true;

        if (enableMagnify) {
            // Destroy the Magnific Popup instance before unmounting
            $(el).magnificPopup("destroy");
        }
    },
};

export { xTooltip, xZoomImage };
