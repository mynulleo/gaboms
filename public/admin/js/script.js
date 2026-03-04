$(function () {
    "use strict";

    // Remove the show class when clicking outside of .advance_search_result, and .search_box input
    function advanceSearchOutsideClick(event) {
        const advanceSearchResult = document.querySelector(
            ".advance_search_result"
        );
        const searchBoxInput = document.querySelector(".search_box input");
        const datePicker = document.querySelector("#ui-datepicker-div");
        if (
            !advanceSearchResult?.contains(event.target) &&
            !searchBoxInput?.contains(event.target) &&
            !datePicker?.contains(event.target) &&
            !event.target.closest("a.ui-corner-all")
        ) {
            $(".advance_search_result").removeClass("show");
        }
    }

    // Fixed menu js start
    $(window).on("scroll", function () {
        let scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#sticky-header").removeClass("sticky-menu");
            $("#header-fixed-height").removeClass("active-height");
        } else {
            $("#sticky-header").addClass("sticky-menu");
            $("#header-fixed-height").addClass("active-height");
        }
    });

    // help info js
    $(document).on("click", ".help_btn", function () {
        $(".help_overlay, .help_info_sidebar").addClass("show");
    });

    $(document).on("click", ".help_overlay ", function () {
        $(".help_overlay, .help_info_sidebar").removeClass("show");
    });

    // update date and time
    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return hours + ":" + minutes + ":" + seconds + " " + ampm;
    }

    function formatDate(date) {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        let day = date.getDate();
        let monthIndex = date.getMonth();
        let year = date.getFullYear();
        return day + " " + monthNames[monthIndex] + ", " + year;
    }

    function updateDateTime() {
        const now = new Date();
        const timeString = formatAMPM(now);
        const dateString = formatDate(now);
        const currentDateTime = document.getElementById("currentDateTime");
        if (currentDateTime) {
            currentDateTime.innerText = timeString + " - " + dateString;
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second

    // Toggle dropdown menu on button click
    $(document).on("click", ".dropdown_menu", function (e) {
        e.stopPropagation(); // Prevent the click event from bubbling up to the document
        let $menu = $(this).next(".dropdown_menu_info");
        $(".dropdown_menu_info")
            .not($menu)
            .removeClass("control_dropdown_menu");
        $menu.toggleClass("control_dropdown_menu");

        advanceSearchOutsideClick(e);
    });

    // Close dropdown menu when clicking outside of it
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".dropdown_menu_info").length) {
            $(".dropdown_menu_info").removeClass("control_dropdown_menu");
        }
    });

    // Prevent dropdown menu from closing when clicking inside it
    $(document).on("click", ".dropdown_menu_info", function (e) {
        e.stopPropagation(); // Prevent the click event from bubbling up to the document

        if ($(e.target).closest("a").length) {
            $(".dropdown_menu_info").removeClass("control_dropdown_menu");
        }

        advanceSearchOutsideClick(e);
    });

    // Toggle the show class on .advance_filter click
    $(document).on(
        "click",
        ".advance_filter, .advance_search_btn",
        function (event) {
            event.stopPropagation(); // Prevent the click event from bubbling up to the document
            $(".advance_search_result").toggleClass("show");
        }
    );

    $(document).on("click", function (event) {
        advanceSearchOutsideClick(event);
    });

    // sidebar collapsed menu js
    // Check the saved state in localStorage and apply it
    if (localStorage.getItem("sidebarState") === "collapsed") {
        $("body").addClass("collapsed_sidebar");
    }

    // Toggle sidebar state and save it in localStorage
    if (localStorage.getItem("sidebarState") === "collapsed") {
        $("body").addClass("collapsed_sidebar");
    }

    // Toggle sidebar state and save it in localStorage
    $(document).on(
        "click",
        ".sidebar_control_btn, .close_mobile_sidebar",
        function () {
            $("body").toggleClass("collapsed_sidebar");
            if ($("body").hasClass("collapsed_sidebar")) {
                localStorage.setItem("sidebarState", "collapsed");
            } else {
                localStorage.removeItem("sidebarState");
            }
        }
    );

    $(window).scroll(function () {
        $(".scroll-to-top").toggleClass("show", $(window).scrollTop() > 300);
    });

    $(document).on("click", ".scroll-to-top", function (e) {
        e.preventDefault();
        if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
            $("html").animate(
                {
                    scrollTop: 0,
                },
                1000
            );
        } else {
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                0
            );
        }

        advanceSearchOutsideClick(e);
    });

    // mobilel menu js

    $(document).on("click", ".mobile-topbar .bars", function () {
        $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
        return false;
    });

    $(document).on(
        "click",
        ".close-mobile-menu,.mobile-menu-overlay",
        function () {
            $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
        }
    );

    // Hide all sub-menus initially
    $(".menu_item ul").hide();

    // Function to handle menu clicks
    $(document).on("click", ".menu_item > a", function (e) {
        // Close all sibling menus
        $(this).parent().siblings().find("ul").slideUp("100");
        $(this)
            .parent()
            .siblings()
            .find(".right")
            .removeClass("fa-caret-up")
            .addClass("fa-caret-down");

        // Toggle the clicked menu
        $(this).siblings("ul").slideToggle("100");

        // Toggle caret icon
        $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");

        setTimeout(() => {
            if (!$(this).is(':hidden')) {  // Ensure the element exists
                const extraOffset = 100; // Adjust this value if you want more or less offset
                const elementPosition = $(this)[0].getBoundingClientRect().top;
    
                // Reference the .menu_list container you want to scroll
                const menuList = $('.menu_list');
    
                // Scroll the .menu_list div, adjusting for the position within its container
                menuList.animate({
                    scrollTop: menuList.scrollTop() + elementPosition - extraOffset
                }, 500); // 500 ms for smooth scrolling
            }
        }, 300);
    });

    // Function to handle nested menu clicks
    $(document).on("click", ".sub_menu a", function (e) {
        e.stopPropagation(); // Prevent the click event from bubbling up to parent menus
        $(this).siblings("ul").slideToggle("100");

        advanceSearchOutsideClick(e);
    });
});
