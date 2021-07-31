<template>
    <div>
        <h1>Words</h1>

        <words-table />
    </div>
</template>

<script>
export default {
    name: 'Words',

    components: {
        WordsTable: () => import('@/components/words/Table')
    }
};
</script>
