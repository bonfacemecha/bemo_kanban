import Vue from "vue";

import Router from "vue-router";
import store from "./store";
// import AdminLayout from "./views/admin/layout/index.vue";


Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/home/index.vue")
        },

        // {
        //     path: "/login/:user_id?",
        //     name: "login",
        //     component: () => import("./views/login/index.vue")
        // },
        // {
        //     path: "/register",
        //     name: "register",
        //     component: () => import("./views/register/index.vue")
        // },
        // {
        //     path: "/verify/user/:id",
        //     name: "verify",
        //     props: true,
        //     component: () => import("./views/verify/index.vue")
        // },
        // {
        //     path: "/forgot-password",
        //     name: "forgot",
        //     component: () => import("./views/forgot/index.vue")
        // },
        // {
        //     path: "/reset/:token",
        //     name: "reset",
        //     component: () => import("./views/reset/index.vue")
        // },
        // {
        //     path: "/",
        //     name: "admin",
        //     component: () => import("./views/admin/dashboard.vue"),
        //     meta: {
        //         requiresAuth: true,
        //         layout: AdminLayout
        //     }
        // },
       

    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.user) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router;
