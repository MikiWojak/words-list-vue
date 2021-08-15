<template>
    <v-dialog v-model="isDialogOpened" max-width="500px" @click:outside="close">
        <v-card>
            <v-card-title>Do you really want to delete this item?</v-card-title>

            <v-card-actions>
                <v-spacer />

                <v-btn text @click="close">
                    <span>No</span>
                </v-btn>

                <v-btn text @click="destroy">
                    <span>Yes</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'DeleteDialog',

    props: {
        isOpened: {
            type: Boolean,
            default: false
        },

        deletedItemId: {
            type: Number,
            default: 0
        }
    },

    data() {
        return {
            isDialogOpened: false
        };
    },

    watch: {
        isOpened() {
            this.isDialogOpened = this.isOpened;
        }
    },

    methods: {
        ...mapActions({
            deleteDialog: 'words/destroy'
        }),

        close() {
            this.$emit('close');
        },

        destroy() {
            try {
                this.deleteDialog(this.deletedItemId);
                this.close();
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
