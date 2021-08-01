<template>
    <div>
        <h2>Table</h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Table',

    computed: {
        ...mapGetters({
            words: 'words/items'
        })
    }
};
</script>
