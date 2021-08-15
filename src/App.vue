<template>
    <v-app>
        <app-header />

        <v-main>
            <words />
        </v-main>

        <app-footer />
    </v-app>
</template>

<script>
export default {
    name: 'App',

    components: {
        AppHeader: () => import('@/components/common/Header'),
        Words: () => import('@/views/Words'),
        AppFooter: () => import('@/components/common/Footer')
    }
};
</script>
