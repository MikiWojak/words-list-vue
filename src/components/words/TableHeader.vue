<template>
    <div>
        <v-toolbar flat>
            <v-toolbar-title>Words list</v-toolbar-title>

            <v-spacer />

            <v-btn icon @click="openAddDialog">
                <span>
                    <v-icon x-large>mdi-plus-circle-outline</v-icon>
                </span>
            </v-btn>
        </v-toolbar>

        <add-edit-dialog
            :is-opened="isAddDialogOpened"
            @close="closeAddDialog"
        />
    </div>
</template>

<script>
export default {
    name: 'TableHeader',

    components: {
        AddEditDialog: () => import('@/components/words/AddEditDialog')
    },

    data() {
        return {
            isAddDialogOpened: false
        };
    },

    methods: {
        openAddDialog() {
            this.isAddDialogOpened = true;
        },

        closeAddDialog() {
            this.isAddDialogOpened = false;
        }
    }
};
</script>
