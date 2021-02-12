/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./grpc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.GreeterGrpcServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.GreeterGrpcServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.HelloRequest,
 *   !proto.HelloReply>}
 */
const methodDescriptor_GreeterGrpcService_SayHello = new grpc.web.MethodDescriptor(
  '/GreeterGrpcService/SayHello',
  grpc.web.MethodType.UNARY,
  proto.HelloRequest,
  proto.HelloReply,
  /**
   * @param {!proto.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.HelloRequest,
 *   !proto.HelloReply>}
 */
const methodInfo_GreeterGrpcService_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.HelloReply,
  /**
   * @param {!proto.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.HelloReply.deserializeBinary
);


/**
 * @param {!proto.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GreeterGrpcServiceClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GreeterGrpcService/SayHello',
      request,
      metadata || {},
      methodDescriptor_GreeterGrpcService_SayHello,
      callback);
};


/**
 * @param {!proto.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.HelloReply>}
 *     Promise that resolves to the response
 */
proto.GreeterGrpcServicePromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GreeterGrpcService/SayHello',
      request,
      metadata || {},
      methodDescriptor_GreeterGrpcService_SayHello);
};


module.exports = proto;

