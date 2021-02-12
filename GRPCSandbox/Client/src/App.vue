<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <button @click="sendGrpcRequest('Gianfustagno')">Send request</button>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

const { HelloReply, HelloRequest } = require('./grpc-client/grpc_pb');
const { GreeterGrpcServiceClient } = require('./grpc-client/grpc_grpc_web_pb');

export default {
  name: 'App',
  data() {
    return {
      helloRequest: new HelloRequest(),
      helloReply: new HelloReply(),
      greeterClient: new GreeterGrpcServiceClient('https://localhost:44331')
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    sendGrpcRequest(name) {
      this.helloRequest.setName(name)
      this.greeterClient.sayHello(this.helloRequest, {}, (err, response) => {
        this.helloReply = response;
        console.log(response);
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
