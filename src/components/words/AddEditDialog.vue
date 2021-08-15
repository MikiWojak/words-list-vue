<template>
    <v-dialog v-model="isDialogOpened" max-width="500px" @click:outside="close">
        <v-card>
            <v-card-title>{{ formTitle }}</v-card-title>

            <v-card-text>
                <v-text-field
                    v-model="formData.word"
                    label="Word"
                    hint="Required."
                />

                <v-text-field
                    v-model="formData.translation"
                    label="Translation"
                    hint="Required."
                />

                <v-text-field v-model="formData.notes" label="Notes" />

                <v-checkbox v-model="formData.completed" label="Completed" />
            </v-card-text>

            <v-card-actions>
                <v-spacer />

                <v-btn text @click="close">
                    <span>Close</span>
                </v-btn>

                <v-btn text @click="save">
                    <span>Save</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AddEditDialog',

    props: {
        isOpened: {
            type: Boolean,
            default: false
        },

        editedItem: {
            type: Object,
            default: null
        }
    },

    data() {
        const defaultForm = {
            id: 0,
            word: '',
            translation: '',
            notes: '',
            completed: false
        };

        return {
            defaultForm,
            formData: { ...defaultForm },
            isDialogOpened: false
        };
    },

    computed: {
        ...mapGetters({
            idForWord: 'words/idForItem'
        }),

        formTitle() {
            return this.editedItem ? 'Edit word' : 'New word';
        }
    },

    watch: {
        isOpened() {
            this.isDialogOpened = this.isOpened;
        },

        editedItem: {
            handler(val) {
                this.formData = val ? { ...val } : { ...this.defaultForm };
            },

            immediate: true
        }
    },

    methods: {
        ...mapActions({
            createWord: 'words/store',
            updateWord: 'words/update'
        }),

        clearInputs() {
            this.formData = { ...this.defaultForm };
        },

        close() {
            this.$emit('close');
            this.clearInputs();
        },

        save() {
            try {
                if (this.editedItem) {
                    this.updateWord(this.formData);

                    this.close();
                } else {
                    this.formData.id = this.idForWord;

                    this.createWord(this.formData);

                    this.close();
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
