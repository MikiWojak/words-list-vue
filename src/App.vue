<template>
    <div>
        <words />
    </div>
</template>

<script>
export default {
    name: 'App',

    components: {
        Words: () => import('@/views/Words')
    }
};
</script>
