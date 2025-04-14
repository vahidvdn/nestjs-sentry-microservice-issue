import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {
export class MyAppGuard {
  constructor(private reflector: Reflector) {
    // super();
  }

  canActivate(context: ExecutionContext) {
    console.log(context.getType()); // rpc

    // throw new RpcException('UnauthorizedException');
    return false;
  }
}
