<template>
    <v-container>
        <words-table />
    </v-container>
</template>

<script>
export default {
    name: 'Words',

    components: {
        WordsTable: () => import('@/components/words/Table')
    }
};
</script>
