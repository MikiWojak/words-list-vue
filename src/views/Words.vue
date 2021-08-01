<template>
    <v-container>
        <h1>Words</h1>

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
