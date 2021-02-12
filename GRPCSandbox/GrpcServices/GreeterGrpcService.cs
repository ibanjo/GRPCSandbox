using Grpc.Core;
using GrpcGreeter;
using System.Threading.Tasks;
using static GrpcGreeter.GreeterGrpcService;

namespace GRPCSandbox.GrpcServices
{
    public class GreeterGrpcService : GreeterGrpcServiceBase
    {
        public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
        {
            return Task.FromResult(new HelloReply 
            { 
                Message = $"Hello, {request.Name}!"
            });
        }
    }
}
