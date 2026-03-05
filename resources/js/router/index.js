import { createRouter, createWebHistory } from "vue-router";

// Define Route...
const routes = [
    {
        path: "",
        component: () => import("../views/admin/layout.vue"),
        beforeEnter: checkAuth,
        children: [
            // ------------------MENU PORTION------------------
            {
                path: "/frontMenu",
                name: "frontMenu.index",
                meta: {
                    title: "Menu",
                    nav: true,
                },
                component: () => import("./../views/admin/website/menu/index"),
            },
            {
                path: "/frontMenu/create",
                name: "frontMenu.create",
                component: () => import("./../views/admin/website/menu/create"),
            },
            {
                path: "/frontMenu/:id",
                name: "frontMenu.show",
                component: () => import("./../views/admin/website/menu/view"),
            },
            {
                path: "/frontMenu/:id/edit",
                name: "frontMenu.edit",
                component: () => import("./../views/admin/website/menu/create"),
            },
            // ------------------CONTENT PORTION------------------
            {
                path: "/content",
                name: "content.index",
                component: () =>
                    import("./../views/admin/website/content/index"),
            },
            {
                path: "/content/create",
                name: "content.create",
                component: () =>
                    import("./../views/admin/website/content/create"),
            },
            {
                path: "/content/:slug",
                name: "content.show",
                component: () =>
                    import("./../views/admin/website/content/view"),
            },
            {
                path: "/content/:slug/edit",
                name: "content.edit",
                component: () =>
                    import("./../views/admin/website/content/create"),
            },
            {
                path: "/content-file/:slug",
                name: "content.file",
                component: () =>
                    import("./../views/admin/website/content/createFile"),
            },
            // ------------------SLIDER PORTION------------------
            {
                path: "/slider",
                name: "slider.index",
                meta: {
                    title: "Slider",
                    nav: true,
                },
                component: () =>
                    import("./../views/admin/website/gallery/slider/index"),
            },
            {
                path: "/slider/create",
                name: "slider.create",
                component: () =>
                    import("./../views/admin/website/gallery/slider/create"),
            },
            {
                path: "/slider/:id",
                name: "slider.show",
                component: () =>
                    import("./../views/admin/website/gallery/slider/view"),
            },
            {
                path: "/slider/:id/edit",
                name: "slider.edit",
                component: () =>
                    import("./../views/admin/website/gallery/slider/create"),
            },

            // ------------------Slider Details portion------------------
            {
                path: "/slider-details",
                name: "slider-details.index",
                meta: {
                    title: "Slider Details",
                    nav: true,
                },
                component: () =>
                    import("./../views/admin/website/gallery/slider/details/index"),
            },
            {
                path: "/slider-details/create",
                name: "slider-details.create",
                component: () =>
                    import("./../views/admin/website/gallery/slider/details/create"),
            },
            {
                path: "/slider-details/:id",
                name: "slider-details.show",
                component: () =>
                    import("./../views/admin/website/gallery/slider/details/view"),
            },
            {
                path: "/slider-details/:id/edit",
                name: "slider-details.edit",
                component: () =>
                    import("./../views/admin/website/gallery/slider/details/create"),
            },

            // ------------------ALBUM PORTION------------------
            {
                path: "/album",
                name: "album.index",
                meta: {
                    title: "Album",
                    nav: true,
                },
                component: () =>
                    import("./../views/admin/website/gallery/album/index"),
            },
            {
                path: "/album/create",
                name: "album.create",
                component: () =>
                    import("./../views/admin/website/gallery/album/create"),
            },
            {
                path: "/album/:id",
                name: "album.show",
                component: () =>
                    import("./../views/admin/website/gallery/album/view"),
            },
            {
                path: "/album/:id/edit",
                name: "album.edit",
                component: () =>
                    import("./../views/admin/website/gallery/album/create"),
            },
            // ------------------PHOTO PORTION------------------
            {
                path: "/photo",
                name: "photo.index",
                meta: {
                    title: "Photo",
                    nav: true,
                },
                component: () =>
                    import("./../views/admin/website/gallery/photo/index"),
            },
            {
                path: "/photo/create",
                name: "photo.create",
                component: () =>
                    import("./../views/admin/website/gallery/photo/create"),
            },
            {
                path: "/photo/:id",
                name: "photo.show",
                component: () =>
                    import("./../views/admin/website/gallery/photo/view"),
            },
            {
                path: "/photo/:id/edit",
                name: "photo.edit",
                component: () =>
                    import("./../views/admin/website/gallery/photo/edit"),
            },
            // ------------------VIDEO PORTION------------------
            {
                path: "/video",
                name: "video.index",
                meta: {
                    title: "Video",
                    nav: true,
                },
                component: () =>
                    import("./../views/admin/website/gallery/video/index"),
            },
            {
                path: "/video/create",
                name: "video.create",
                component: () =>
                    import("./../views/admin/website/gallery/video/create"),
            },
            {
                path: "/video/:id",
                name: "video.show",
                component: () =>
                    import("./../views/admin/website/gallery/video/view"),
            },
            {
                path: "/video/:id/edit",
                name: "video.edit",
                component: () =>
                    import("./../views/admin/website/gallery/video/create"),
            },
            // ------------------News portion------------------
            {
                path: "/news",
                name: "news.index",
                meta: {
                    title: "News",
                    nav: true,
                },
                component: () => import("./../views/admin/website/news/index"),
            },
            {
                path: "/news/create",
                name: "news.create",
                component: () => import("./../views/admin/website/news/create"),
            },
            {
                path: "/news/:id",
                name: "news.show",
                component: () => import("./../views/admin/website/news/view"),
            },
            {
                path: "/news/:id/edit",
                name: "news.edit",
                component: () => import("./../views/admin/website/news/create"),
            },
            // ------------------Notice portion------------------
            {
                path: "/notice",
                name: "notice.index",
                meta: {
                    title: "Notice",
                    nav: true,
                },
                component: () =>
                    import("./../views/admin/website/notice/index"),
            },
            {
                path: "/notice/create",
                name: "notice.create",
                component: () =>
                    import("./../views/admin/website/notice/create"),
            },
            {
                path: "/notice/:id",
                name: "notice.show",
                component: () => import("./../views/admin/website/notice/view"),
            },
            {
                path: "/notice/:id/edit",
                name: "notice.edit",
                component: () =>
                    import("./../views/admin/website/notice/create"),
            },

            // ------------------ADMIN PORTION------------------
            {
                path: "/dashboard",
                name: "dashboard.index",
                component: () => import("./../views/admin/dashboard.vue"),
            },
            {
                path: "/admin",
                name: "admin.index",
                component: () => import("./../views/admin/admin/index"),
            },
            {
                path: "/admin/create",
                name: "admin.create",
                component: () => import("./../views/admin/admin/create"),
            },
            {
                path: "/admin/:id",
                name: "admin.show",
                component: () => import("./../views/admin/admin/view"),
            },
            {
                path: "/admin/:id/edit",
                name: "admin.edit",
                component: () => import("./../views/admin/admin/create"),
            },

            // ------------------User Profile------------------
            {
                path: "/profile",
                name: "profile.profileDetails",
                component: () => import("./../views/admin/admin/profile"),
            },

            // ------------------ROLE PORTION------------------
            {
                path: "/role",
                name: "role.index",
                component: () => import("./../views/admin/system/role/index"),
            },
            {
                path: "/role/create",
                name: "role.create",
                component: () => import("./../views/admin/system/role/create"),
            },
            {
                path: "/role/:id",
                name: "role.show",
                component: () => import("./../views/admin/system/role/view"),
            },
            {
                path: "/role/:id/edit",
                name: "role.edit",
                component: () => import("./../views/admin/system/role/create"),
            },
            // ------------------MENU PORTION------------------
            {
                path: "/menu",
                name: "menu.index",
                component: () => import("./../views/admin/system/menu/index"),
            },
            {
                path: "/menu/create",
                name: "menu.create",
                component: () => import("./../views/admin/system/menu/create"),
            },
            {
                path: "/menu/:id",
                name: "menu.show",
                component: () => import("./../views/admin/system/menu/view"),
            },
            {
                path: "/menu/:id/edit",
                name: "menu.edit",
                component: () => import("./../views/admin/system/menu/create"),
            },
            // ------------------SITE SETTING PORTION------------------
            {
                path: "/siteSetting",
                name: "siteSetting.show",
                component: () =>
                    import("./../views/admin/system/siteSettings/view"),
            },
            {
                path: "/siteSetting/create",
                name: "siteSetting.create",
                component: () =>
                    import("./../views/admin/system/siteSettings/create"),
            },

            {
                path: "/siteSetting/edit",
                name: "siteSetting.edit",
                component: () =>
                    import("./../views/admin/system/siteSettings/create"),
            },
            // ------------------MODULE PORTION------------------
            {
                path: "/module",
                name: "module.index",
                component: () => import("./../views/admin/system/module/index"),
            },
            {
                path: "/module/create",
                name: "module.create",
                component: () =>
                    import("./../views/admin/system/module/create"),
            },
            // ------------------ACTIVITY LOG PORTION------------------
            {
                path: "/activityLog",
                name: "activityLog.index",
                component: () =>
                    import("./../views/admin/system/activityLog/index"),
            },
            {
                path: "/activityLog/:id",
                name: "activityLog.show",
                component: () =>
                    import("./../views/admin/system/activityLog/view"),
            },
            {
                path: "/sitemap",
                name: "sitemap.index",
                component: () =>
                    import("./../views/admin/system/sitemap/Index"),
            },

            // ------------------CATEGORY PORTION------------------
            {
                path: "/category",
                name: "category.index",
                component: () => import("./../views/admin/category/index"),
            },
            {
                path: "/category/create",
                name: "category.create",
                component: () => import("./../views/admin/category/create"),
            },
            {
                path: "/category/:id",
                name: "category.show",
                component: () => import("./../views/admin/category/view"),
            },
            {
                path: "/category/:id/edit",
                name: "category.edit",
                component: () => import("./../views/admin/category/create"),
            },

            {
                path: "/searchData",
                name: "searchData.index",
                component: () => import("./../views/admin/XMLData"),
            },
            {
                path: "/robots",
                name: "robots.index",
                component: () => import("./../views/admin/robots"),
            },

            // ------------------mediaValidator PORTION------------------
            {
                path: "/mediaValidator",
                name: "mediaValidator.index",
                component: () =>
                    import("./../views/admin/mediaValidator/index"),
            },
            {
                path: "/mediaValidator/create",
                name: "mediaValidator.create",
                component: () =>
                    import("./../views/admin/mediaValidator/create"),
            },
            {
                path: "/mediaValidator/:id",
                name: "mediaValidator.show",
                component: () => import("./../views/admin/mediaValidator/view"),
            },
            {
                path: "/mediaValidator/:id/edit",
                name: "mediaValidator.edit",
                component: () =>
                    import("./../views/admin/mediaValidator/create"),
            },
            // ------------------HelpInfo PORTION------------------
            {
                path: "/helpInfo",
                name: "helpInfo.index",
                component: () => import("./../views/admin/helpInfo/index"),
            },
            {
                path: "/helpInfo/create",
                name: "helpInfo.create",
                component: () => import("./../views/admin/helpInfo/create"),
            },
            {
                path: "/helpInfo/:id",
                name: "helpInfo.show",
                component: () => import("./../views/admin/helpInfo/view"),
            },
            {
                path: "/helpInfo/:id/edit",
                name: "helpInfo.edit",
                component: () => import("./../views/admin/helpInfo/create"),
            },

            // ------------------Theme PORTION------------------
            {
                path: "/theme",
                name: "theme.index",
                component: () => import("./../views/admin/theme/index"),
            },
            {
                path: "/theme/create",
                name: "theme.create",
                component: () => import("./../views/admin/theme/create"),
            },
            {
                path: "/theme/:id",
                name: "theme.show",
                component: () => import("./../views/admin/theme/view"),
            },
            {
                path: "/theme/:id/edit",
                name: "theme.edit",
                component: () => import("./../views/admin/theme/create"),
            },

            // ------------------Service PORTION------------------
            {
                path: "/service",
                name: "service.index",
                component: () => import("./../views/admin/service/index"),
            },
            {
                path: "/service/create",
                name: "service.create",
                component: () => import("./../views/admin/service/create"),
            },
            {
                path: "/service/:id",
                name: "service.show",
                component: () => import("./../views/admin/service/view"),
            },
            {
                path: "/service/:id/edit",
                name: "service.edit",
                component: () => import("./../views/admin/service/create"),
            },
            // ------------------Invoice PORTION------------------
            {
                path: "/invoice",
                name: "invoice.index",
                component: () => import("./../views/admin/invoice/index"),
            },
            {
                path: "/invoice/create",
                name: "invoice.create",
                component: () => import("./../views/admin/invoice/create"),
            },
            {
                path: "/invoice/:id",
                name: "invoice.show",
                component: () => import("./../views/admin/invoice/view"),
            },
            {
                path: "/invoice/:id/edit",
                name: "invoice.edit",
                component: () => import("./../views/admin/invoice/create"),
            },
            {
                path: "/invoice/bill/:id",
                name: "invoice.bill",
                component: () => import("./../views/admin/invoice/bill"),
            },
            {
                path: "/invoice/moneyreceipt/:id",
                name: "invoice.moneyreceipt",
                component: () =>
                    import("./../views/admin/invoice/moneyreceipt"),
            },
            // ------------------Unit PORTION------------------
            {
                path: "/unit",
                name: "unit.index",
                component: () => import("./../views/admin/unit/index"),
            },
            {
                path: "/unit/create",
                name: "unit.create",
                component: () => import("./../views/admin/unit/create"),
            },
            {
                path: "/unit/:id",
                name: "unit.show",
                component: () => import("./../views/admin/unit/view"),
            },
            {
                path: "/unit/:id/edit",
                name: "unit.edit",
                component: () => import("./../views/admin/unit/create"),
            },
            // ------------------Client PORTION------------------
            {
                path: "/client",
                name: "client.index",
                component: () => import("./../views/admin/client/index"),
            },
            {
                path: "/client/create",
                name: "client.create",
                component: () => import("./../views/admin/client/create"),
            },
            {
                path: "/client/:id",
                name: "client.show",
                component: () => import("./../views/admin/client/view"),
            },
            {
                path: "/client/:id/edit",
                name: "client.edit",
                component: () => import("./../views/admin/client/create"),
            },

            // ------------------District PORTION------------------
            {
                path: "/district",
                name: "district.index",
                component: () => import("./../views/admin/district/index"),
            },
            {
                path: "/district/create",
                name: "district.create",
                component: () => import("./../views/admin/district/create"),
            },
            {
                path: "/district/:id",
                name: "district.show",
                component: () => import("./../views/admin/district/view"),
            },
            {
                path: "/district/:id/edit",
                name: "district.edit",
                component: () => import("./../views/admin/district/create"),
            },
            // ------------------Area PORTION------------------
            {
                path: "/area",
                name: "area.index",
                component: () => import("./../views/admin/area/index"),
            },
            {
                path: "/area/create",
                name: "area.create",
                component: () => import("./../views/admin/area/create"),
            },
            {
                path: "/area/:id",
                name: "area.show",
                component: () => import("./../views/admin/area/view"),
            },
            {
                path: "/area/:id/edit",
                name: "area.edit",
                component: () => import("./../views/admin/area/create"),
            },
            // ------------------Branch PORTION------------------
            {
                path: "/branch",
                name: "branch.index",
                component: () => import("./../views/admin/branch/index"),
            },
            {
                path: "/branch/create",
                name: "branch.create",
                component: () => import("./../views/admin/branch/create"),
            },
            {
                path: "/branch/:id",
                name: "branch.show",
                component: () => import("./../views/admin/branch/view"),
            },
            {
                path: "/branch/:id/edit",
                name: "branch.edit",
                component: () => import("./../views/admin/branch/create"),
            },
            // ------------------Designation PORTION------------------
            {
                path: "/designation",
                name: "designation.index",
                component: () => import("./../views/admin/designation/index"),
            },
            {
                path: "/designation/create",
                name: "designation.create",
                component: () => import("./../views/admin/designation/create"),
            },
            {
                path: "/designation/:id",
                name: "designation.show",
                component: () => import("./../views/admin/designation/view"),
            },
            {
                path: "/designation/:id/edit",
                name: "designation.edit",
                component: () => import("./../views/admin/designation/create"),
            },
            // ------------------Employee PORTION------------------
            {
                path: "/employee",
                name: "employee.index",
                component: () => import("./../views/admin/employee/index"),
            },
            {
                path: "/employee/create",
                name: "employee.create",
                component: () => import("./../views/admin/employee/create"),
            },
            {
                path: "/employee/:id",
                name: "employee.show",
                component: () => import("./../views/admin/employee/view"),
            },
            {
                path: "/employee/:id/edit",
                name: "employee.edit",
                component: () => import("./../views/admin/employee/create"),
            },
            // ------------------BulkDataImport PORTION------------------
            {
                path: "bulkdataimport/employee",
                name: "bulkdataimport.employee",
                component: () =>
                    import("./../views/admin/bulkdataimport/employee"),
            },
            {
                path: "bulkdataimport/client",
                name: "bulkdataimport.client",
                component: () =>
                    import("./../views/admin/bulkdataimport/client"),
            },

            // ------------------Account PORTION------------------
            {
                path: "/account",
                name: "account.index",
                component: () => import("./../views/admin/account/index"),
            },
            {
                path: "/account/create",
                name: "account.create",
                component: () => import("./../views/admin/account/create"),
            },
            {
                path: "/account/:id",
                name: "account.show",
                component: () => import("./../views/admin/account/view"),
            },
            {
                path: "/account/:id/edit",
                name: "account.edit",
                component: () => import("./../views/admin/account/create"),
            },
            // ------------------Supplier PORTION------------------
            {
                path: "/supplier",
                name: "supplier.index",
                component: () => import("./../views/admin/supplier/index"),
            },
            {
                path: "/supplier/create",
                name: "supplier.create",
                component: () => import("./../views/admin/supplier/create"),
            },
            {
                path: "/supplier/:id",
                name: "supplier.show",
                component: () => import("./../views/admin/supplier/view"),
            },
            {
                path: "/supplier/:id/edit",
                name: "supplier.edit",
                component: () => import("./../views/admin/supplier/create"),
            },
            // ------------------FinancialYear PORTION------------------
            {
                path: "/financialYear",
                name: "financialYear.index",
                component: () => import("./../views/admin/financialYear/index"),
            },
            {
                path: "/financialYear/create",
                name: "financialYear.create",
                component: () =>
                    import("./../views/admin/financialYear/create"),
            },
            {
                path: "/financialYear/:id",
                name: "financialYear.show",
                component: () => import("./../views/admin/financialYear/view"),
            },
            {
                path: "/financialYear/:id/edit",
                name: "financialYear.edit",
                component: () =>
                    import("./../views/admin/financialYear/create"),
            },
            // ------------------Voucher PORTION------------------
            {
                path: "/voucher",
                name: "voucher.index",
                component: () => import("./../views/admin/voucher/index"),
            },
            {
                path: "/voucher/create",
                name: "voucher.create",
                component: () => import("./../views/admin/voucher/create"),
            },
            {
                path: "/voucher/:id",
                name: "voucher.show",
                component: () => import("./../views/admin/voucher/view"),
            },
            {
                path: "/voucher/:id/edit",
                name: "voucher.edit",
                component: () => import("./../views/admin/voucher/create"),
            },

            // ------------------Expense PORTION------------------
            {
                path: "/expense",
                name: "expense.index",
                component: () => import("./../views/admin/expense/index"),
            },
            {
                path: "/expense/create",
                name: "expense.create",
                component: () => import("./../views/admin/expense/create"),
            },
            {
                path: "/expense/:id",
                name: "expense.show",
                component: () => import("./../views/admin/expense/view"),
            },
            {
                path: "/expense/:id/edit",
                name: "expense.edit",
                component: () => import("./../views/admin/expense/create"),
            },
            // ------------------Purchase PORTION------------------
            {
                path: "/purchase",
                name: "purchase.index",
                component: () => import("./../views/admin/purchase/index"),
            },
            {
                path: "/purchase/create",
                name: "purchase.create",
                component: () => import("./../views/admin/purchase/create"),
            },
            {
                path: "/purchase/:id",
                name: "purchase.show",
                component: () => import("./../views/admin/purchase/view"),
            },
            {
                path: "/purchase/:id/edit",
                name: "purchase.edit",
                component: () => import("./../views/admin/purchase/create"),
            },
            // ------------------Item PORTION------------------
            {
                path: "/item",
                name: "item.index",
                component: () => import("./../views/admin/item/index"),
            },
            {
                path: "/item/create",
                name: "item.create",
                component: () => import("./../views/admin/item/create"),
            },
            {
                path: "/item/:id",
                name: "item.show",
                component: () => import("./../views/admin/item/view"),
            },
            {
                path: "/item/:id/edit",
                name: "item.edit",
                component: () => import("./../views/admin/item/create"),
            },
            // ------------------Issue PORTION------------------
            {
                path: "/issue",
                name: "issue.index",
                component: () => import("./../views/admin/issue/index"),
            },
            {
                path: "/issue/create",
                name: "issue.create",
                component: () => import("./../views/admin/issue/create"),
            },
            {
                path: "/issue/:id",
                name: "issue.show",
                component: () => import("./../views/admin/issue/view"),
            },
            {
                path: "/issue/:id/edit",
                name: "issue.edit",
                component: () => import("./../views/admin/issue/create"),
            },
            // ------------------LoanInfo PORTION------------------
            {
                path: "/loanInfo",
                name: "loanInfo.index",
                component: () => import("./../views/admin/loanInfo/index"),
            },
            {
                path: "/loanInfo/create",
                name: "loanInfo.create",
                component: () => import("./../views/admin/loanInfo/create"),
            },
            {
                path: "/loanInfo/:id",
                name: "loanInfo.show",
                component: () => import("./../views/admin/loanInfo/view"),
            },
            {
                path: "/loanInfo/:id/edit",
                name: "loanInfo.edit",
                component: () => import("./../views/admin/loanInfo/create"),
            },
            // ------------------SalarySheet PORTION------------------
            {
                path: "/salarySheet",
                name: "salarySheet.index",
                component: () => import("./../views/admin/salarySheet/index"),
            },
            {
                path: "/salarySheet/create",
                name: "salarySheet.create",
                component: () => import("./../views/admin/salarySheet/create"),
            },
            {
                path: "/salarySheet/:id",
                name: "salarySheet.show",
                component: () => import("./../views/admin/salarySheet/view"),
            },
            {
                path: "/salarySheet/:id/edit",
                name: "salarySheet.edit",
                component: () => import("./../views/admin/salarySheet/create"),
            },
            // ------------------Payment PORTION------------------
            {
                path: "/payment",
                name: "payment.index",
                component: () => import("./../views/admin/payment/index"),
            },
            {
                path: "/payment/create",
                name: "payment.create",
                component: () => import("./../views/admin/payment/create"),
            },
            {
                path: "/payment/:id",
                name: "payment.show",
                component: () => import("./../views/admin/payment/view"),
            },
            {
                path: "/payment/:id/edit",
                name: "payment.edit",
                component: () => import("./../views/admin/payment/create"),
            },
            // ------------------SalaryParameter PORTION------------------
            {
                path: "/salaryParameter",
                name: "salaryParameter.index",
                component: () =>
                    import("./../views/admin/salaryParameter/index"),
            },
            {
                path: "/salaryParameter/create",
                name: "salaryParameter.create",
                component: () =>
                    import("./../views/admin/salaryParameter/create"),
            },
            {
                path: "/salaryParameter/:id",
                name: "salaryParameter.show",
                component: () =>
                    import("./../views/admin/salaryParameter/view"),
            },
            {
                path: "/salaryParameter/:id/edit",
                name: "salaryParameter.edit",
                component: () =>
                    import("./../views/admin/salaryParameter/create"),
            },
            // ------------------Commission PORTION------------------
            {
                path: "/commission",
                name: "commission.index",
                component: () => import("./../views/admin/commission/index"),
            },
            {
                path: "/commission/create",
                name: "commission.create",
                component: () => import("./../views/admin/commission/create"),
            },
            {
                path: "/commission/:id",
                name: "commission.show",
                component: () => import("./../views/admin/commission/view"),
            },
            {
                path: "/commission/:id/edit",
                name: "commission.edit",
                component: () => import("./../views/admin/commission/create"),
            },
            // ------------------Bank PORTION------------------
            {
                path: "/bank",
                name: "bank.index",
                component: () => import("./../views/admin/bank/index"),
            },
            {
                path: "/bank/create",
                name: "bank.create",
                component: () => import("./../views/admin/bank/create"),
            },
            {
                path: "/bank/:id",
                name: "bank.show",
                component: () => import("./../views/admin/bank/view"),
            },
            {
                path: "/bank/:id/edit",
                name: "bank.edit",
                component: () => import("./../views/admin/bank/create"),
            },
            // ------------------FundTransfer PORTION------------------
            {
                path: "/fundTransfer",
                name: "fundTransfer.index",
                component: () => import("./../views/admin/fundTransfer/index"),
            },
            {
                path: "/fundTransfer/create",
                name: "fundTransfer.create",
                component: () => import("./../views/admin/fundTransfer/create"),
            },
            {
                path: "/fundTransfer/:id",
                name: "fundTransfer.show",
                component: () => import("./../views/admin/fundTransfer/view"),
            },
            {
                path: "/fundTransfer/:id/edit",
                name: "fundTransfer.edit",
                component: () => import("./../views/admin/fundTransfer/create"),
            },
            // ------------------Withdrawl PORTION------------------
            {
                path: "/withdrawl",
                name: "withdrawl.index",
                component: () => import("./../views/admin/withdrawl/index"),
            },
            {
                path: "/withdrawl/create",
                name: "withdrawl.create",
                component: () => import("./../views/admin/withdrawl/create"),
            },
            {
                path: "/withdrawl/:id",
                name: "withdrawl.show",
                component: () => import("./../views/admin/withdrawl/view"),
            },
            {
                path: "/withdrawl/:id/edit",
                name: "withdrawl.edit",
                component: () => import("./../views/admin/withdrawl/create"),
            },
            // ------------------Workorder PORTION------------------
            {
                path: "/workorder",
                name: "workorder.index",
                component: () => import("./../views/admin/workorder/index"),
            },
            {
                path: "/workorder/create",
                name: "workorder.create",
                component: () => import("./../views/admin/workorder/create"),
            },
            {
                path: "/workorder/:id",
                name: "workorder.show",
                component: () => import("./../views/admin/workorder/view"),
            },
            {
                path: "/workorder/:id/edit",
                name: "workorder.edit",
                component: () => import("./../views/admin/workorder/create"),
            },

            // ------------------Report PORTION------------------
            {
                path: "/report/itemladger",
                name: "report.itemladger",
                component: () => import("./../views/admin/report/itemladger"),
            },
            {
                path: "/report/availablestock",
                name: "report.availablestock",
                component: () =>
                    import("./../views/admin/report/availablestock"),
            },
            {
                path: "/report/incomestatement",
                name: "report.incomestatement",
                component: () =>
                    import("./../views/admin/report/incomestatement"),
            },
            {
                path: "/report/expensestatement",
                name: "report.expensestatement",
                component: () =>
                    import("./../views/admin/report/expensestatement"),
            },
            {
                path: "/report/cashbook",
                name: "report.cashbook",
                component: () => import("./../views/admin/report/cashbook"),
            },
            {
                path: "/report/ledger",
                name: "report.ledger",
                component: () => import("./../views/admin/report/ledger"),
            },
            {
                path: "/report/trialbalance",
                name: "report.trialbalance",
                component: () => import("./../views/admin/report/trialbalance"),
            },
            {
                path: "/report/receivable",
                name: "report.receivable",
                component: () => import("./../views/admin/report/receivable"),
            },
            {
                path: "/report/payable",
                name: "report.payable",
                component: () => import("./../views/admin/report/payable"),
            },
            {
                path: "/report/balancesheet",
                name: "report.balancesheet",
                component: () => import("./../views/admin/report/balancesheet"),
            },
            {
                path: "/report/clientledger",
                name: "report.clientledger",
                component: () => import("./../views/admin/report/clientledger"),
            },
            {
                path: "/report/supplierledger",
                name: "report.supplierledger",
                component: () =>
                    import("./../views/admin/report/supplierledger"),
            },
            {
                path: "/report/employeeledger",
                name: "report.employeeledger",
                component: () =>
                    import("./../views/admin/report/employeeledger"),
            },
            {
                path: "/report/funds",
                name: "report.funds",
                component: () => import("./../views/admin/report/funds"),
            },
        ],
    },
];

// Check Authentication...
function checkAuth(to, from, next) {
    let role = localStorage.getItem("role");
    let user = localStorage.getItem("user");
    if (role && user) {
        next();
    } else {
        window.location.href = "/";
    }
}

// Initialize Router..
const router = createRouter({
    history: createWebHistory(process.env.MIX_VUE_ROUTER_BASE + "/admin/"),
    scrollBehavior() {
        document.getElementById("app").scrollIntoView({
            behavior: "smooth",
        });
    },

    linkExactActiveClass: "active",
    routes,
});

export default router;
