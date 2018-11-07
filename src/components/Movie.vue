 <template>
     <v-layout row wrap>
       <v-flex xs4>
         <v-card>
           <v-card-title primary-title>
             <div>
               <div class="headline">{{ movie.name }}</div>
                <span class="grey--text">{{ movie.release_year }} ‧ {{ movie.genre }}</span>
             </div>
           </v-card-title>
           <v-btn color="info" @click="rate">Rate this movie</v-btn>
           <v-card-text>
             {{ movie.description }}
           </v-card-text>
         </v-card>
       </v-flex>
     </v-layout>
   </template>

<script>
   import axios from 'axios';
   import Vue from 'vue';
   import VueStarRating from 'vue-star-rating';

    let wrapper = document.createElement('div');

    // shared state
    let state = {
        note: 0
    }

    let RatingComponent = Vue.extend({
    data() { return {rating: 0} 
    },
    watch: {
        rating (newVal) { state.note = newVal }
    },
    template: `
        <div class="rating">
            How was your experience getting help with this issues?
        <star-rating v-model="rating" :show-rating="false"></star-rating>
        </div>`,
    components: {'star-rating': VueStarRating.default}
    })

    let component = new RatingComponent().$mount(wrapper)

    export default {
        name: 'Movie',
        data() {
        return {
            movie: [], 
            };
        },
    mounted() {
        this.fetchMovie();
        },
        methods: {
            rate() {
            this.$swal({
                content: component.$el,
                buttons: {
                confirm: {
                    value: 0
                }, 
            },
            }).then(() => {
                const movieId = this.$route.params.id;
                return axios({
                method: 'post',
                data: {
                    rate: state.note,
                },
                url: `http://localhost:8081/movies/rate/${movieId}`,
                headers: {
                    'Content-Type': 'application/json',
                },
                })
                .then(() => {
                    this.$swal(`Thank you for rating! ${state.note}`, 'success');
                })
                .catch((error) => {
                    const message = error.response.data.message;
                    this.$swal('Oh oo!', `${message}`, 'error');
                });
        }); 
    
    },
       async fetchMovie() {
         return axios({
           method: 'get',
           url: `http://localhost:8081/api/movies/${this.$route.params.id}`,
         })
           .then((response) => {
             this.movie = response.data;
           })
           .catch(() => {

           }); 
        },
    }, 
};
</script>