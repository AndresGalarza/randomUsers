<template >
    <div v-if="currentUser">
        <div class="md-layout">
            <md-avatar class="md-xl">
                <img :src="currentUser.picture.large" alt="People">
            </md-avatar>
        </div>
        <div class="md-layout">
            <md-list>
                <md-list-item>
                    <md-icon  class="md-accent">contacts</md-icon>
                    <h1 class="md-list-item-text">{{currentUser.name.title | upperCase}} {{currentUser.name.first | upperCase}} {{currentUser.name.last | upperCase}}</h1>
                </md-list-item>
                <md-list-item>
                    <md-icon>person</md-icon>
                    <span class="md-list-item-text">{{currentUser.login.username}}</span>
                </md-list-item>
            </md-list>
        </div>

        <div class="md-layout">
            <md-list class="md-layout-item md-xsmall-size-100">

                <md-list-item>
                    <md-icon>smartphone</md-icon>
                    <span class="md-list-item-text">{{currentUser.cell}}</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>local_phone</md-icon>
                    <span class="md-list-item-text">{{currentUser.phone}}</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>alternate_email</md-icon>
                    <span class="md-list-item-text">{{currentUser.email}}</span>
                </md-list-item>



            </md-list>
            <md-list class="md-layout-item md-xsmall-size-100">

                <md-list-item>
                    <md-icon>cake</md-icon>
                    <span class="md-list-item-text">{{currentUser.dob.date | moment("dddd, MMMM Do YYYY")}}</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>calendar_today</md-icon>
                    <span class="md-list-item-text">{{currentUser.dob.age | yearsOld}}</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>wc</md-icon>
                    <span class="md-list-item-text">{{currentUser.gender}}</span>
                </md-list-item>


            </md-list>
            <md-list class="md-layout-item md-xsmall-size-100">
                <md-list-item>
                    <md-icon>place</md-icon>
                    <span class="md-list-item-text">{{currentUser.location.city}}</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>map</md-icon>
                    <span class="md-list-item-text">{{currentUser.location.state}}</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>map</md-icon>
                    <span class="md-list-item-text">{{currentUser.location.street | yearsOld}}</span>
                </md-list-item>

            </md-list>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .md-avatar.md-xl{
        min-width: 120px;
        min-height: 120px;
    }
</style>

<script>
    import {mapState,mapMutations} from 'vuex'

    export default {
        name: 'Overlap',
        data: () => ({
        }),
        computed:{
            ...mapState(['currentUser'])
        },
        methods:{
            ...mapMutations(['getCurrentUser'])
        },
        created() {
            this.getCurrentUser();
        }
    }
</script>