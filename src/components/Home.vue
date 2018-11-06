<template>
 <div>
   <v-layout row wrap>
    <v-flex xs12>
      <div v-text="message"></div>
    </v-flex>
    <v-flex xs12>
      <v-btn color="primary" v-on:click="reply">Reply</v-btn>
    </v-flex>
   </v-layout>
 </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      message: 'Hello, hows it going?',
    };
  },
  methods: {
    reply() {
      this.message = "I'm doing great. Thank you."
    }
  }
} ;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
