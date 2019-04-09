<template >
    <div class="md-layout">
        <aside class="md-layout-item md-size-15 md-medium-size-100 columnOptions">
            <h2>Show/Hide Columns</h2>
            <md-checkbox v-model="columns.picture">Picture</md-checkbox>
            <md-checkbox v-model="columns.title">Title</md-checkbox>
            <md-checkbox v-model="columns.firstName">First Name</md-checkbox>
            <md-checkbox v-model="columns.lastName">Last Name</md-checkbox>
            <md-checkbox v-model="columns.email">E-mail</md-checkbox>
            <md-checkbox v-model="columns.phone">Phone</md-checkbox>
            <md-checkbox v-model="columns.cell">Cell</md-checkbox>
            <md-checkbox v-model="columns.gender">Gender</md-checkbox>
            <md-checkbox v-model="columns.username">Username</md-checkbox>
            <md-checkbox v-model="columns.birthday">Birthday</md-checkbox>
            <md-checkbox v-model="columns.age">Age</md-checkbox>
        </aside>
        <section class="md-layout-item md-size-85 md-medium-size-100 md-scrollbar section-scroll">
            <table class="fullSizeTable">
                <md-table v-if="listUsers">
                    <md-table-toolbar>
                        <h2>Users</h2>
                    </md-table-toolbar>
                    <md-table-row>
                        <md-table-head>ID</md-table-head>
                        <md-table-head v-show="columns.picture">Pic</md-table-head>
                        <md-table-head v-show="columns.title">Title</md-table-head>
                        <md-table-head v-show="columns.firstName">First Name</md-table-head>
                        <md-table-head v-show="columns.lastName">Last Name</md-table-head>
                        <md-table-head v-show="columns.username">Username</md-table-head>
                        <md-table-head v-show="columns.email">Email</md-table-head>
                        <md-table-head v-show="columns.phone">Phone</md-table-head>
                        <md-table-head v-show="columns.cell">Cell</md-table-head>
                        <md-table-head v-show="columns.gender">Gender</md-table-head>
                        <md-table-head v-show="columns.birthday">Birthday</md-table-head>
                        <md-table-head v-show="columns.age">Age</md-table-head>
                        <md-table-head>Action</md-table-head>
                    </md-table-row>

                    <md-table-row v-for="(user,index) in listUsers">
                        <md-table-cell md-numeric>{{index+1}}</md-table-cell>
                        <md-table-cell v-show="columns.picture">
                            <md-avatar class="md-small">
                                <img :src="user.picture.thumbnail" alt="People">
                            </md-avatar>
                        </md-table-cell>
                        <md-table-cell v-show="columns.title">{{user.name.title}}</md-table-cell>
                        <md-table-cell v-show="columns.firstName">{{user.name.first}}</md-table-cell>
                        <md-table-cell  v-show="columns.lastName">{{user.name.last}}</md-table-cell>
                        <md-table-cell  v-show="columns.username">{{user.login.username}}</md-table-cell>
                        <md-table-cell v-show="columns.email">{{user.email}}</md-table-cell>
                        <md-table-cell v-show="columns.phone">{{user.phone}}</md-table-cell>
                        <md-table-cell v-show="columns.cell">{{user.cell}}</md-table-cell>
                        <md-table-cell v-show="columns.gender">{{user.gender}}</md-table-cell>
                        <md-table-cell v-show="columns.birthday">{{user.dob.date |  moment("dddd, MMMM Do YYYY") }}</md-table-cell>
                        <md-table-cell v-show="columns.age">{{user.dob.age | yearsOld}}</md-table-cell>
                        <md-table-cell ><router-link :to="'/details/'+user.email" ><md-button class="md-accent">Details</md-button></router-link></md-table-cell>
                    </md-table-row>
                </md-table>
                <md-table v-else>
                    <md-table-toolbar>
                        <h2>Users</h2>
                    </md-table-toolbar>
                    <p>Loading ...</p>
                    <md-progress-bar md-mode="indeterminate"></md-progress-bar>
                </md-table>
            </table>
        </section>
    </div>
</template>


<style lang="scss" scoped>
    .md-checkbox{
        display: flex;
    }

    .section-scroll {
        overflow-x: auto;
    }
    .columnOptions .md-checkbox {
        @media screen and (max-width: 1280px) {
            display: inline-flex;
        }
    }

    .fullSizeTable{
        width: 100%;
    }


</style>

<script>
    import {mapState,mapMutations} from 'vuex'

    export default {
        name: 'Overlap',
        data: () => ({

        }),
        computed:{
            ...mapState(['listUsers','columns'])
        },
        methods:{
            ...mapMutations(['getListUsers'])
        }
    }
</script>