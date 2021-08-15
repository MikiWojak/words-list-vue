<template>
    <div>
        <v-data-table :headers="headers" :items="words" class="elevation-1">
            <template v-slot:top>
                <table-header />
            </template>

            <template v-slot:[`item.actions`]>
                <v-btn icon>
                    <span>
                        <v-icon small>mdi-pencil</v-icon>
                    </span>
                </v-btn>

                <v-btn icon>
                    <span>
                        <v-icon small>mdi-delete</v-icon>
                    </span>
                </v-btn>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Table',

    components: {
        TableHeader: () => import('@/components/words/TableHeader')
    },

    computed: {
        ...mapGetters({
            words: 'words/items'
        }),

        headers() {
            return [
                { text: 'ID', value: 'id' },
                { text: 'Word', value: 'word' },
                { text: 'Translation', value: 'translation' },
                { text: 'Completed', value: 'completed' },
                { text: 'Actions', value: 'actions', sortable: false }
            ];
        }
    }
};
</script>
